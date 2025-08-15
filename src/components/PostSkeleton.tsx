import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function PostSkeleton() {
  return <div className="px-0 -ml-48 w-[3340%] pt-16 sm:pt-0 md:w-full md:-ml-0">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <div
                className="flex flex-col w-full gap-4"
                style={{ width: "100%" }}
              >
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-full p-4 bg-black rounded-md shadow-md"
                    >
                      {/* Profile Section */}
                      <div className="flex items-center gap-3 mb-2">
                        <Skeleton circle={true} width={40} height={40} />
                        <div>
                          <Skeleton width={120} height={15} />
                          <Skeleton width={80} height={12} />
                        </div>
                      </div>

                      {/* Post Content */}
                      <Skeleton width="100%" height={20} className="mb-2" />

                      {/* Image Placeholder */}
                      <Skeleton
                        width="100%"
                        height={"70vh"}
                        className="rounded-md"
                      />

                      {/* Interaction Icons */}
                      <div className="flex justify-between mt-3">
                        <div className="flex gap-4">
                          <Skeleton width={20} height={20} circle />
                          <Skeleton width={20} height={20} circle />
                        </div>
                        <div>
                          <Skeleton width={20} height={20} circle />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </SkeletonTheme>
          </div>
}
