'use client'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost, updatePost, deletePost } from '../lib/postsSlice'
import { RootState } from '../lib/store'

export default function AdminDashboard() {
  const { posts } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch()
  
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

  const handleEdit = (post: any) => {
    setFormData(post)
    setIsEditing(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-prayagraj-primary mb-8">Admin Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Post Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            {isEditing ? 'Edit Post' : 'Add New Post'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
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
              <label className="block text-gray-700 mb-2">Content</label>
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
                <label className="block text-gray-700 mb-2">Category</label>
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
                <label className="block text-gray-700 mb-2">Author</label>
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
                <label className="block text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
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
                {isEditing ? 'Update' : 'Add'} Post
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        
        {/* Posts List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Manage Posts</h2>
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
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deletePost(post.id))}
                    className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}