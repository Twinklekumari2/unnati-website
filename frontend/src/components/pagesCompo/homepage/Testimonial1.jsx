import React from 'react'
import { cloudinaryImage2 } from '../../../utils/cloudinary'

const Testimonial1 = () => {
  return (
    <section className="w-full flex justify-center items-center py-5 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden mb-20">
        <div className="bg-white rounded-3xl p-8 shadow-lg border w-[90%] border-gray-200 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic text-center">
            "यह संस्था हम लोगों के लिए बहुत उपयोगी है।"
          </p>

          <div className="mt-6 text-center">
            <h3 className="font-semibold text-gray-900">
              — Ravi Kumar
            </h3>
            <p className="text-sm text-gray-500">
              Class-IX A
            </p>
          </div>
        </div>
      </section>
  )
}

export default Testimonial1