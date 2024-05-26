import BlogCard from '@/components/BlogCard'
import React from 'react'
import Image from "next/image";
export default function Blog() {

  const cardContent = [
    {
      id: 0,
      img_url: '/blog-svg/pace.svg',
      date: new Date(2024, 6, 10),
      title: 'Açık Havada Yürüyüşün Zihin Sağlığına Faydaları',
      description: 'Lorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer liLorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer li',
      tags: ['Plumbing', 'Architecture', 'Maintenance']
    },
    {
      id: 1,
      img_url: '/blog-svg/culture.svg',
      date: new Date(2024, 6, 10),
      title: 'Bowl Kültürü ve Hayatımıza Çok Hızlı Girmesi',
      description: 'Lorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer liLorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer li',
      tags: ['Plumbing', 'Architecture', 'Maintenance']
    },
    {
      id: 2,
      img_url: '/blog-svg/exercise.svg',
      date: new Date(2024, 6, 11),
      title: 'En Kısa Sürede Tüm Kaslarını Çalıştıracak Hareketler',
      description: 'Lorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer liLorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer li',
      tags: ['Plumbing', 'Architecture', 'Maintenance']
    }
  ]

  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center ">
      <p className='text-black font-bold text-5xl mb-6'>Blog Yazılarımızı Keşfedin</p>
      <p className='text-2xl font-normal text-black-coral'>Lorem ipsum dolor sit amet consectetur. Diam tellus vivamus</p>
      <p className='text-2xl font-normal text-black-coral'>pharetra consectetur dictumst viverra. Lacus malesuada </p>
      <div className='my-12 flex flex-row justify-center items-center gap-6'>
      {cardContent.map((content) => (
          <BlogCard key={content.id} {...content} />
        ))}
      </div>
      <div className='flex flex-row justify-center items-center'>
        <p className='font-bold text-[20px] text-dove-gray leading-6 mr-2'>View More</p>
        <Image
        src='/blog-svg/next-icon.svg'
        alt='next-icon'
        className="object-cover"
        width={6}
        height={12}
        priority
      />
      </div>
    </div>
  )
}
