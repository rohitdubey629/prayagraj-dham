'use client'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost, updatePost, deletePost } from '../lib/postsSlice'
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
} from '../lib/api'
import { useTranslation } from '../lib/useTranslation'
import { translations } from '../lib/translations'

type Post = {
  id: number
  title: string
  content: string
  category: string
  image: string
  author: string
  date: string
}


export default function AdminDashboard() {
  const { posts } = useSelector((state: RootState) => state.posts)
  const { token } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const ad = translations.admin
  const sh = translations.shlokas

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

  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    content: '',
    category: '',
    image: '',
    author: '',
    date: new Date().toISOString().split('T')[0]
  })
  
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isEditing) {
      dispatch(updatePost(formData))
    } else {
      const newPost = {
        ...formData,
        id: Date.now()
      }
      dispatch(addPost(newPost))
    }
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      id: 0,
      title: '',
      content: '',
      category: '',
      image: '',
      author: '',
      date: new Date().toISOString().split('T')[0]
    })
    setIsEditing(false)
  }

  const handleEdit = (post: Post) => {
    setFormData(post)
    setIsEditing(true)
  }

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
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {posts.map(post => (
              <div key={post.id} className="border-b pb-4">
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{post.category} • {post.date}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-sm bg-prayagraj-secondary text-white px-2 py-1 rounded"
                  >
                    {t(ad.edit)}
                  </button>
                  <button
                    onClick={() => dispatch(deletePost(post.id))}
                    className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                  >
                    {t(ad.delete)}
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
        {placesStatus === 'ready' && pendingPlaces.length === 0 && (
          <p className="text-gray-500">{t(ad.noPending)}</p>
        )}

        <div className="space-y-4">
          {pendingPlaces.map((place) => (
            <div key={place._id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">
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
          {shlokasStatus === 'ready' && pendingShlokas.length === 0 && (
            <p className="text-gray-500">{t(sh.adminNoPending)}</p>
          )}

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {pendingShlokas.map((shloka) => (
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
        {approvedPlacesStatus === 'ready' && approvedPlaces.length === 0 && (
          <p className="text-gray-500">{t(ad.noApprovedPlaces)}</p>
        )}

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {approvedPlaces.map((place) => (
            <div key={place._id} className="border rounded-lg p-3 flex justify-between items-center">
              <div>
                <h3 className="font-medium">
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
        {approvedShlokasStatus === 'ready' && approvedShlokas.length === 0 && (
          <p className="text-gray-500">{t(ad.noApprovedShlokas)}</p>
        )}

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {approvedShlokas.map((shloka) => (
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
    </div>
  )
}