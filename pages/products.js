/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const products = (props) => {
  return (
    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop {props.name}</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item, i) => {
              return (
                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-80 rounded m-auto mb-8" src={item.attributes.image.data && `http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
                    <div className='hidden bg-black bg-red-800 bg-green-800 bg-purple-800 bg-white bg-yellow-500'></div>
                    <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
                    <p className="leading-relaxed text-base">{item.attributes.description}</p>
                    <Link href={`/product/${item.attributes.slug}`}>
                      <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy now</button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer 83946211ae2e473f875770106aa203f39e5cc904cd8dfe7bdabda0e2d4937ba56237edd18d17a45a8c67d5ce70cbdd334c1fdb53afa0a268b8c30d234e172f5b8a5ccbb665c8d7e18ae7d9ec5621ff06dde47c7a16f36aae22b6017c6265766268f73500e77d202a44b595c98fdc86d296fcdf802d9662ac380b5772e5ed28ec" }
  let a = await fetch("http://127.0.0.1:1337/api/products?populate=*", {
    headers: headers
  })
  let products = await a.json()
  return {
    props: { products }
  }
}

export default products
