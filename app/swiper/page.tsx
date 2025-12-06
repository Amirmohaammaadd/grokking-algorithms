
"use client"

import { useRef, useState } from 'react';
import { Button, Modal } from 'antd';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperPage = () => {

    const [openModal, setOpenModal] = useState(false)
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className='flex h-screen items-center justify-center'>
            <Button onClick={() => setOpenModal(true)}>
                Open Modal
            </Button>

            <Modal
                open={openModal}
                footer={null}
                onCancel={() => setOpenModal(false)}
                width={500}
            >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={500}
                    slidesPerView={1}
                    navigation={false}
                    pagination={false}
                    scrollbar={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className='h-[300px] w-full '
                >
                    {["test", "amir", "ali", "reza"].map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className='flex items-center justify-center text-white text-2xl font-bold bg-red-500'
                        >
                            {item}
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='flex gap-2 mt-4'>
                    <button
                        className='p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        Previous
                    </button>
                    <button
                        className='p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        Next
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default SwiperPage;