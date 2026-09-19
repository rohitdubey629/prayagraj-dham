'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../lib/store'
import {
  getPendingPlaces,
  approvePlace,
  rejectPlace,
  Place,
  getPendingShlokas,
  approveShloka,
  rejectShloka,
  adminCreateShloka,
  Shloka,
  getApprovedPlacesAdmin,
  toggleFeaturedPlace,
  getApprovedShlokasAdmin,
  toggleFeaturedShloka,
  getPostsAdmin,
  createPost,
  updatePost,
  deletePost,
  toggleFeaturedPost,
  Post,
  PostInput,
  getHeroSlides,
  addHeroSlide,
  deleteHeroSlide,
  HeroSlide,
  getKumbhEvents,
  createKumbhEvent,
  deleteKumbhEvent,
  KumbhEvent,
} from '../lib/api'
import { useTranslation } from '../lib/useTranslation'
import { translations } from '../lib/translations'


export default function AdminDashboard() {
  const { token } = useSelector((state: RootState) => state.auth)
  const { t } = useTranslation()
  const ad = translations.admin
  const sh = translations.shlokas

  const [kumbhEvents, setKumbhEvents] = useState<KumbhEvent[]>([])
  const [kumbhStatus, setKumbhStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [kumbhForm, setKumbhForm] = useState({
    location: 'Prayagraj',
    locationHindi: '',
    kumbhType: 'Maha Kumbh',
    kumbhTypeHindi: '',
    year: '',
    startDate: '',
    endDate: '',
    description: '',
    descriptionEnglish: '',
    isApproximate: false,
  })

  const loadKumbhEvents = () => {
    setKumbhStatus('loading')
    getKumbhEvents()
      .then((data) => {
        setKumbhEvents(data)
        setKumbhStatus('ready')
      })
      .catch(() => setKumbhStatus('error'))
  }

  useEffect(() => {
    loadKumbhEvents()
  }, [])

  const handleKumbhFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setKumbhForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleAddKumbhEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token || !kumbhForm.locationHindi || !kumbhForm.kumbhTypeHindi || !kumbhForm.year) return
    await createKumbhEvent(
      {
        location: kumbhForm.location,
        locationHindi: kumbhForm.locationHindi,
        kumbhType: kumbhForm.kumbhType,
        kumbhTypeHindi: kumbhForm.kumbhTypeHindi,
        year: Number(kumbhForm.year),
        startDate: kumbhForm.startDate || undefined,
        endDate: kumbhForm.endDate || undefined,
        description: kumbhForm.description || undefined,
        descriptionEnglish: kumbhForm.descriptionEnglish || undefined,
        isApproximate: kumbhForm.isApproximate,
      },
      token
    )
    setKumbhForm({
      location: 'Prayagraj',
      locationHindi: '',
      kumbhType: 'Maha Kumbh',
      kumbhTypeHindi: '',
      year: '',
      startDate: '',
      endDate: '',
      description: '',
      descriptionEnglish: '',
      isApproximate: false,
    })
    loadKumbhEvents()
  }

  const handleDeleteKumbhEvent = async (id: string) => {
    if (!token) return
    await deleteKumbhEvent(id, token)
    setKumbhEvents((prev) => prev.filter((e) => e._id !== id))
  }

  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([])
  const [heroStatus, setHeroStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [heroUploading, setHeroUploading] = useState(false)
  const [heroError, setHeroError] = useState('')

  const loadHeroSlides = () => {
    setHeroStatus('loading')
    getHeroSlides()
      .then((data) => {
        setHeroSlides(data)
        setHeroStatus('ready')
      })
      .catch(() => setHeroStatus('error'))
  }

  useEffect(() => {
    loadHeroSlides()
  }, [])

  const handleAddHeroSlide = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file || !token) return
    setHeroUploading(true)
    setHeroError('')
    try {
      const slide = await addHeroSlide(file, token)
      setHeroSlides((prev) => [...prev, slide])
    } catch (err) {
      setHeroError(err instanceof Error ? err.message : t(ad.heroUploadError))
    } finally {
      setHeroUploading(false)
    }
  }

  const handleDeleteHeroSlide = async (id: string) => {
    if (!token) return
    await deleteHeroSlide(id, token)
    setHeroSlides((prev) => prev.filter((s) => s._id !== id))
  }

  const [pendingPlaces, setPendingPlaces] = useState<Place[]>([])
  const [placesStatus, setPlacesStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [rejectingId, setRejectingId] = useState<string | null>(null)
  const [rejectReason, setRejectReason] = useState('')

  const loadPendingPlaces = () => {
    if (!token) return
    setPlacesStatus('loading')
    getPendingPlaces(token)
      .then((data) => {
        setPendingPlaces(data)
        setPlacesStatus('ready')
      })
      .catch(() => setPlacesStatus('error'))
  }

  useEffect(() => {
    loadPendingPlaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const handleApprove = async (id: string) => {
    if (!token) return
    await approvePlace(id, token)
    setPendingPlaces((prev) => prev.filter((p) => p._id !== id))
    loadApprovedPlaces()
  }

  const handleReject = async (id: string) => {
    if (!token) return
    await rejectPlace(id, rejectReason, token)
    setPendingPlaces((prev) => prev.filter((p) => p._id !== id))
    setRejectingId(null)
    setRejectReason('')
  }

  const [pendingShlokas, setPendingShlokas] = useState<Shloka[]>([])
  const [shlokasStatus, setShlokasStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [rejectingShlokaId, setRejectingShlokaId] = useState<string | null>(null)
  const [rejectShlokaReason, setRejectShlokaReason] = useState('')
  const [shlokaForm, setShlokaForm] = useState({ text: '', source: '', meaning: '', scheduledDate: '' })

  const loadPendingShlokas = () => {
    if (!token) return
    setShlokasStatus('loading')
    getPendingShlokas(token)
      .then((data) => {
        setPendingShlokas(data)
        setShlokasStatus('ready')
      })
      .catch(() => setShlokasStatus('error'))
  }

  useEffect(() => {
    loadPendingShlokas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const handleApproveShloka = async (id: string) => {
    if (!token) return
    await approveShloka(id, token)
    setPendingShlokas((prev) => prev.filter((s) => s._id !== id))
    loadApprovedShlokas()
  }

  const handleRejectShloka = async (id: string) => {
    if (!token) return
    await rejectShloka(id, rejectShlokaReason, token)
    setPendingShlokas((prev) => prev.filter((s) => s._id !== id))
    setRejectingShlokaId(null)
    setRejectShlokaReason('')
  }

  const handleShlokaFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setShlokaForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddShloka = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token || !shlokaForm.text.trim()) return
    await adminCreateShloka(
      {
        text: shlokaForm.text,
        source: shlokaForm.source || undefined,
        meaning: shlokaForm.meaning || undefined,
        scheduledDate: shlokaForm.scheduledDate || undefined,
      },
      token
    )
    setShlokaForm({ text: '', source: '', meaning: '', scheduledDate: '' })
    loadApprovedShlokas()
  }

  const [approvedPlaces, setApprovedPlaces] = useState<Place[]>([])
  const [approvedPlacesStatus, setApprovedPlacesStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  const loadApprovedPlaces = () => {
    if (!token) return
    setApprovedPlacesStatus('loading')
    getApprovedPlacesAdmin(token)
      .then((data) => {
        setApprovedPlaces(data)
        setApprovedPlacesStatus('ready')
      })
      .catch(() => setApprovedPlacesStatus('error'))
  }

  useEffect(() => {
    loadApprovedPlaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const handleToggleFeaturedPlace = async (id: string, featured: boolean) => {
    if (!token) return
    const updated = await toggleFeaturedPlace(id, featured, token)
    setApprovedPlaces((prev) => prev.map((p) => (p._id === id ? updated : p)))
  }

  const [approvedShlokas, setApprovedShlokas] = useState<Shloka[]>([])
  const [approvedShlokasStatus, setApprovedShlokasStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  const loadApprovedShlokas = () => {
    if (!token) return
    setApprovedShlokasStatus('loading')
    getApprovedShlokasAdmin(token)
      .then((data) => {
        setApprovedShlokas(data)
        setApprovedShlokasStatus('ready')
      })
      .catch(() => setApprovedShlokasStatus('error'))
  }

  useEffect(() => {
    loadApprovedShlokas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const handleToggleFeaturedShloka = async (id: string, featured: boolean) => {
    if (!token) return
    const updated = await toggleFeaturedShloka(id, featured, token)
    setApprovedShlokas((prev) => prev.map((s) => (s._id === id ? updated : s)))
  }

  const [posts, setPosts] = useState<Post[]>([])
  const [postsStatus, setPostsStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  const loadPosts = () => {
    if (!token) return
    setPostsStatus('loading')
    getPostsAdmin(token)
      .then((data) => {
        setPosts(data)
        setPostsStatus('ready')
      })
      .catch(() => setPostsStatus('error'))
  }

  useEffect(() => {
    loadPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const emptyFormData: PostInput = {
    title: '',
    content: '',
    category: '',
    image: '',
    author: '',
    date: new Date().toISOString().split('T')[0]
  }

  const [formData, setFormData] = useState<PostInput>(emptyFormData)
  const [editingId, setEditingId] = useState<string | null>(null)
  const isEditing = editingId !== null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token) return
    if (isEditing && editingId) {
      await updatePost(editingId, formData, token)
    } else {
      await createPost(formData, token)
    }
    resetForm()
    loadPosts()
  }

  const resetForm = () => {
    setFormData(emptyFormData)
    setEditingId(null)
  }

  const handleEdit = (post: Post) => {
    setFormData({
      title: post.title,
      content: post.content,
      category: post.category,
      image: post.image || '',
      author: post.author,
      date: new Date(post.date).toISOString().split('T')[0],
    })
    setEditingId(post._id)
  }

  const handleDeletePost = async (id: string) => {
    if (!token) return
    await deletePost(id, token)
    setPosts((prev) => prev.filter((p) => p._id !== id))
  }

  const handleToggleFeaturedPost = async (id: string, featured: boolean) => {
    if (!token) return
    const updated = await toggleFeaturedPost(id, featured, token)
    setPosts((prev) => prev.map((p) => (p._id === id ? updated : p)))
  }

  const [postFilter, setPostFilter] = useState('')
  const filteredPosts = posts.filter((post) => {
    const q = postFilter.trim().toLowerCase()
    if (!q) return true
    return post.title.toLowerCase().includes(q) || post.category.toLowerCase().includes(q)
  })

  const [pendingPlacesFilter, setPendingPlacesFilter] = useState('')
  const filteredPendingPlaces = pendingPlaces.filter((place) => {
    const q = pendingPlacesFilter.trim().toLowerCase()
    if (!q) return true
    return (
      place.name.toLowerCase().includes(q) ||
      place.nameHindi.toLowerCase().includes(q) ||
      place.category.toLowerCase().includes(q) ||
      place.location.toLowerCase().includes(q)
    )
  })

  const [pendingShlokasFilter, setPendingShlokasFilter] = useState('')
  const filteredPendingShlokas = pendingShlokas.filter((shloka) => {
    const q = pendingShlokasFilter.trim().toLowerCase()
    if (!q) return true
    return (
      shloka.text.toLowerCase().includes(q) ||
      (shloka.submittedByName || '').toLowerCase().includes(q) ||
      (shloka.submittedByEmail || '').toLowerCase().includes(q)
    )
  })

  const [approvedPlacesFilter, setApprovedPlacesFilter] = useState('')
  const [approvedPlacesCategory, setApprovedPlacesCategory] = useState('')
  const approvedPlacesCategories = Array.from(new Set(approvedPlaces.map((p) => p.category)))
  const filteredApprovedPlaces = approvedPlaces.filter((place) => {
    const q = approvedPlacesFilter.trim().toLowerCase()
    const matchesQuery =
      !q ||
      place.name.toLowerCase().includes(q) ||
      place.nameHindi.toLowerCase().includes(q) ||
      place.location.toLowerCase().includes(q)
    const matchesCategory = !approvedPlacesCategory || place.category === approvedPlacesCategory
    return matchesQuery && matchesCategory
  })

  const [approvedShlokasFilter, setApprovedShlokasFilter] = useState('')
  const filteredApprovedShlokas = approvedShlokas.filter((shloka) => {
    const q = approvedShlokasFilter.trim().toLowerCase()
    if (!q) return true
    return shloka.text.toLowerCase().includes(q) || (shloka.source || '').toLowerCase().includes(q)
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-prayagraj-primary mb-8">{t(ad.heading)}</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Post Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            {isEditing ? t(ad.editPost) : t(ad.addPost)}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{t(ad.postTitle)}</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">{t(ad.content)}</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">{t(ad.category)}</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t(ad.author)}</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">{t(ad.imageUrl)}</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">{t(ad.date)}</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-prayagraj-primary text-white px-4 py-2 rounded hover:bg-prayagraj-secondary transition"
              >
                {isEditing ? t(ad.update) : t(ad.add)}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                  {t(ad.cancel)}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Posts List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t(ad.managePosts)}</h2>

          {postsStatus === 'loading' && <p className="text-gray-500">{t(ad.loading)}</p>}
          {postsStatus === 'error' && <p className="text-red-600">{t(ad.pendingLoadError)}</p>}

          {postsStatus === 'ready' && posts.length > 0 && (
            <input
              type="text"
              value={postFilter}
              onChange={(e) => setPostFilter(e.target.value)}
              placeholder={t(ad.filterPlaceholder)}
              className="w-full px-3 py-2 border rounded mb-4 text-sm"
            />
          )}

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredPosts.map(post => (
              <div key={post._id} className="border-b pb-4">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-medium text-gray-900">{post.title}</h3>
                  {post.featured && (
                    <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded whitespace-nowrap">
                      {t(ad.featuredBadge)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-2">{post.category} • {new Date(post.date).toLocaleDateString()}</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-sm bg-prayagraj-secondary text-white px-2 py-1 rounded"
                  >
                    {t(ad.edit)}
                  </button>
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                  >
                    {t(ad.delete)}
                  </button>
                  <button
                    onClick={() => handleToggleFeaturedPost(post._id, !post.featured)}
                    className={`text-sm px-2 py-1 rounded whitespace-nowrap ${
                      post.featured ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {post.featured ? t(ad.unmarkFeatured) : t(ad.markFeatured)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Places Moderation */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-bold mb-4">
          {t(ad.pendingPlaces)} {pendingPlaces.length > 0 && `(${pendingPlaces.length})`}
        </h2>

        {placesStatus === 'loading' && <p className="text-gray-500">{t(ad.loading)}</p>}
        {placesStatus === 'error' && (
          <p className="text-red-600">{t(ad.pendingLoadError)}</p>
        )}

        {placesStatus === 'ready' && pendingPlaces.length > 0 && (
          <input
            type="text"
            value={pendingPlacesFilter}
            onChange={(e) => setPendingPlacesFilter(e.target.value)}
            placeholder={t(ad.filterPlaceholder)}
            className="w-full px-3 py-2 border rounded mb-4 text-sm"
          />
        )}

        {placesStatus === 'ready' && pendingPlaces.length === 0 && (
          <p className="text-gray-500">{t(ad.noPending)}</p>
        )}

        <div className="space-y-4">
          {filteredPendingPlaces.map((place) => (
            <div key={place._id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {place.name} <span className="text-gray-500">({place.nameHindi})</span>
                  </h3>
                  <p className="text-sm text-gray-500">
                    {place.category} • {place.location}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleApprove(place._id)}
                    className="text-sm bg-green-600 text-white px-3 py-1 rounded"
                  >
                    {t(ad.approve)}
                  </button>
                  <button
                    onClick={() => setRejectingId(rejectingId === place._id ? null : place._id)}
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded"
                  >
                    {t(ad.reject)}
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mt-2">{place.descriptionHindi}</p>
              {place.visitingHours && (
                <p className="text-sm text-gray-500 mt-1">{t(ad.timingLabel)} {place.visitingHours}</p>
              )}

              {rejectingId === place._id && (
                <div className="mt-3 flex space-x-2">
                  <input
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                    placeholder={t(ad.rejectReasonPlaceholder)}
                    className="flex-1 px-3 py-1 border rounded text-sm"
                  />
                  <button
                    onClick={() => handleReject(place._id)}
                    className="text-sm bg-red-600 text-white px-3 py-1 rounded"
                  >
                    {t(ad.confirmReject)}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Shlokas */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Admin direct add */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t(sh.adminAddHeading)}</h2>
          <form onSubmit={handleAddShloka} className="space-y-3">
            <textarea
              name="text"
              value={shlokaForm.text}
              onChange={handleShlokaFormChange}
              placeholder={t(sh.textLabel)}
              rows={3}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                name="source"
                value={shlokaForm.source}
                onChange={handleShlokaFormChange}
                placeholder={t(sh.sourceLabel)}
                className="px-3 py-2 border rounded"
              />
              <input
                type="date"
                name="scheduledDate"
                value={shlokaForm.scheduledDate}
                onChange={handleShlokaFormChange}
                className="px-3 py-2 border rounded"
              />
            </div>
            <textarea
              name="meaning"
              value={shlokaForm.meaning}
              onChange={handleShlokaFormChange}
              placeholder={t(sh.meaningLabel)}
              rows={2}
              className="w-full px-3 py-2 border rounded"
            />
            <button
              type="submit"
              className="bg-prayagraj-primary text-white px-4 py-2 rounded hover:bg-prayagraj-secondary transition"
            >
              {t(sh.adminAdd)}
            </button>
          </form>
        </div>

        {/* Pending Shlokas */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            {t(sh.adminPending)} {pendingShlokas.length > 0 && `(${pendingShlokas.length})`}
          </h2>

          {shlokasStatus === 'loading' && <p className="text-gray-500">{t(ad.loading)}</p>}
          {shlokasStatus === 'error' && <p className="text-red-600">{t(ad.pendingLoadError)}</p>}

          {shlokasStatus === 'ready' && pendingShlokas.length > 0 && (
            <input
              type="text"
              value={pendingShlokasFilter}
              onChange={(e) => setPendingShlokasFilter(e.target.value)}
              placeholder={t(ad.filterPlaceholder)}
              className="w-full px-3 py-2 border rounded mb-4 text-sm"
            />
          )}

          {shlokasStatus === 'ready' && pendingShlokas.length === 0 && (
            <p className="text-gray-500">{t(sh.adminNoPending)}</p>
          )}

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredPendingShlokas.map((shloka) => (
              <div key={shloka._id} className="border rounded-lg p-4">
                <blockquote className="italic" style={{ whiteSpace: 'pre-line' }}>
                  &quot;{shloka.text}&quot;
                </blockquote>
                <p className="text-sm text-gray-500 mt-1">
                  {shloka.submittedByName} • {shloka.submittedByEmail}
                </p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => handleApproveShloka(shloka._id)}
                    className="text-sm bg-green-600 text-white px-3 py-1 rounded"
                  >
                    {t(ad.approve)}
                  </button>
                  <button
                    onClick={() =>
                      setRejectingShlokaId(rejectingShlokaId === shloka._id ? null : shloka._id)
                    }
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded"
                  >
                    {t(ad.reject)}
                  </button>
                </div>

                {rejectingShlokaId === shloka._id && (
                  <div className="mt-3 flex space-x-2">
                    <input
                      value={rejectShlokaReason}
                      onChange={(e) => setRejectShlokaReason(e.target.value)}
                      placeholder={t(ad.rejectReasonPlaceholder)}
                      className="flex-1 px-3 py-1 border rounded text-sm"
                    />
                    <button
                      onClick={() => handleRejectShloka(shloka._id)}
                      className="text-sm bg-red-600 text-white px-3 py-1 rounded"
                    >
                      {t(ad.confirmReject)}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manage Places (featured toggle) */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-bold mb-4">{t(ad.managePlaces)}</h2>

        {approvedPlacesStatus === 'loading' && <p className="text-gray-500">{t(ad.loading)}</p>}
        {approvedPlacesStatus === 'error' && <p className="text-red-600">{t(ad.pendingLoadError)}</p>}

        {approvedPlacesStatus === 'ready' && approvedPlaces.length > 0 && (
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={approvedPlacesFilter}
              onChange={(e) => setApprovedPlacesFilter(e.target.value)}
              placeholder={t(ad.filterPlaceholder)}
              className="flex-1 px-3 py-2 border rounded text-sm"
            />
            <select
              value={approvedPlacesCategory}
              onChange={(e) => setApprovedPlacesCategory(e.target.value)}
              className="px-3 py-2 border rounded text-sm"
            >
              <option value="">{t(ad.allCategories)}</option>
              {approvedPlacesCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}

        {approvedPlacesStatus === 'ready' && approvedPlaces.length === 0 && (
          <p className="text-gray-500">{t(ad.noApprovedPlaces)}</p>
        )}

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredApprovedPlaces.map((place) => (
            <div key={place._id} className="border rounded-lg p-3 flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">
                  {place.name} <span className="text-gray-500">({place.nameHindi})</span>
                </h3>
                <p className="text-sm text-gray-500">{place.category} • {place.location}</p>
              </div>
              <button
                onClick={() => handleToggleFeaturedPlace(place._id, !place.featured)}
                className={`text-sm px-3 py-1 rounded whitespace-nowrap ${
                  place.featured ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {place.featured ? t(ad.unmarkFeatured) : t(ad.markFeatured)}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Manage Shlokas (featured toggle) */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-bold mb-4">{t(ad.manageShlokasHeading)}</h2>

        {approvedShlokasStatus === 'loading' && <p className="text-gray-500">{t(ad.loading)}</p>}
        {approvedShlokasStatus === 'error' && <p className="text-red-600">{t(ad.pendingLoadError)}</p>}

        {approvedShlokasStatus === 'ready' && approvedShlokas.length > 0 && (
          <input
            type="text"
            value={approvedShlokasFilter}
            onChange={(e) => setApprovedShlokasFilter(e.target.value)}
            placeholder={t(ad.filterPlaceholder)}
            className="w-full px-3 py-2 border rounded mb-4 text-sm"
          />
        )}

        {approvedShlokasStatus === 'ready' && approvedShlokas.length === 0 && (
          <p className="text-gray-500">{t(ad.noApprovedShlokas)}</p>
        )}

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredApprovedShlokas.map((shloka) => (
            <div key={shloka._id} className="border rounded-lg p-3 flex justify-between items-center gap-3">
              <blockquote className="italic text-sm flex-1" style={{ whiteSpace: 'pre-line' }}>
                &quot;{shloka.text}&quot;
              </blockquote>
              <button
                onClick={() => handleToggleFeaturedShloka(shloka._id, !shloka.featured)}
                className={`text-sm px-3 py-1 rounded whitespace-nowrap ${
                  shloka.featured ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {shloka.featured ? t(ad.unmarkFeatured) : t(ad.markFeatured)}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Homepage Hero slideshow management */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-bold mb-1">{t(ad.manageHeroHeading)}</h2>
        <p className="text-sm text-gray-500 mb-4">{t(ad.heroIntro)}</p>

        <label className="block text-gray-700 mb-2">{t(ad.heroUploadLabel)}</label>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleAddHeroSlide}
          disabled={heroUploading}
          className="w-full mb-4"
        />
        {heroUploading && <p className="text-gray-500 text-sm mb-2">{t(ad.heroUploading)}</p>}
        {heroError && <p className="text-red-600 text-sm mb-2">{heroError}</p>}

        {heroStatus === 'loading' && <p className="text-gray-500">{t(ad.loading)}</p>}
        {heroStatus === 'error' && <p className="text-red-600">{t(ad.pendingLoadError)}</p>}
        {heroStatus === 'ready' && heroSlides.length === 0 && (
          <p className="text-gray-500">{t(ad.heroEmpty)}</p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroSlides.map((slide) => (
            <div key={slide._id} className="relative rounded-lg overflow-hidden border h-32 bg-gray-100">
              {slide.mediaType === 'video' ? (
                <video src={slide.mediaUrl} className="w-full h-full object-cover" muted />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={slide.mediaUrl} alt="Hero slide" className="w-full h-full object-cover" />
              )}
              <button
                onClick={() => handleDeleteHeroSlide(slide._id)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm leading-none shadow"
                aria-label={t(ad.heroDelete)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Kumbh Events management */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t(ad.addKumbhEvent)}</h2>
          <form onSubmit={handleAddKumbhEvent} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 mb-1 text-sm">{t(ad.kumbhLocation)}</label>
                <select
                  name="location"
                  value={kumbhForm.location}
                  onChange={handleKumbhFormChange}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="Prayagraj">Prayagraj</option>
                  <option value="Haridwar">Haridwar</option>
                  <option value="Ujjain">Ujjain</option>
                  <option value="Nashik">Nashik</option>
                </select>
              </div>
              <input
                name="locationHindi"
                value={kumbhForm.locationHindi}
                onChange={handleKumbhFormChange}
                placeholder={t(ad.kumbhLocationHindi)}
                required
                className="px-3 py-2 border rounded self-end"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 mb-1 text-sm">{t(ad.kumbhType)}</label>
                <select
                  name="kumbhType"
                  value={kumbhForm.kumbhType}
                  onChange={handleKumbhFormChange}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="Maha Kumbh">Maha Kumbh</option>
                  <option value="Purna Kumbh">Purna Kumbh</option>
                  <option value="Ardh Kumbh">Ardh Kumbh</option>
                  <option value="Simhastha">Simhastha</option>
                </select>
              </div>
              <input
                name="kumbhTypeHindi"
                value={kumbhForm.kumbhTypeHindi}
                onChange={handleKumbhFormChange}
                placeholder={t(ad.kumbhTypeHindi)}
                required
                className="px-3 py-2 border rounded self-end"
              />
            </div>
            <input
              type="number"
              name="year"
              value={kumbhForm.year}
              onChange={handleKumbhFormChange}
              placeholder={t(ad.kumbhYear)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 mb-1 text-sm">{t(ad.kumbhStartDate)}</label>
                <input
                  type="date"
                  name="startDate"
                  value={kumbhForm.startDate}
                  onChange={handleKumbhFormChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm">{t(ad.kumbhEndDate)}</label>
                <input
                  type="date"
                  name="endDate"
                  value={kumbhForm.endDate}
                  onChange={handleKumbhFormChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
            <textarea
              name="description"
              value={kumbhForm.description}
              onChange={handleKumbhFormChange}
              placeholder={t(ad.kumbhDescription)}
              rows={2}
              className="w-full px-3 py-2 border rounded"
            />
            <textarea
              name="descriptionEnglish"
              value={kumbhForm.descriptionEnglish}
              onChange={handleKumbhFormChange}
              placeholder={t(ad.kumbhDescriptionEnglish)}
              rows={2}
              className="w-full px-3 py-2 border rounded"
            />
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="isApproximate"
                checked={kumbhForm.isApproximate}
                onChange={handleKumbhFormChange}
              />
              {t(ad.kumbhApproximate)}
            </label>
            <button
              type="submit"
              className="bg-prayagraj-primary text-white px-4 py-2 rounded hover:bg-prayagraj-secondary transition"
            >
              {t(ad.add)}
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t(ad.manageKumbhHeading)}</h2>
          {kumbhStatus === 'loading' && <p className="text-gray-500">{t(ad.loading)}</p>}
          {kumbhStatus === 'error' && <p className="text-red-600">{t(ad.pendingLoadError)}</p>}
          {kumbhStatus === 'ready' && kumbhEvents.length === 0 && (
            <p className="text-gray-500">{t(ad.noKumbhEvents)}</p>
          )}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {kumbhEvents.map((event) => (
              <div key={event._id} className="border rounded-lg p-3 flex justify-between items-center gap-3">
                <div>
                  <p className="font-medium">
                    {event.locationHindi} ({event.location}) — {event.kumbhTypeHindi}
                  </p>
                  <p className="text-sm text-gray-500">
                    {event.year}
                    {event.isApproximate ? ' (approx)' : ''}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteKumbhEvent(event._id)}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded whitespace-nowrap"
                >
                  {t(ad.delete)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}