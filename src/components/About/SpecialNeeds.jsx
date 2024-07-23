import React, { useState } from 'react'

const SpecialNeeds = () => {
        const [current, setCurrent] = useState("Education")




        return (
                <div className='bg-[#9000000d]  z-40 py-20'>
                        <section className='w-[90%] mx-auto'>
                                <h2 className='text-[#1D2130] text-5xl font-bold'>Our Focus Area</h2>
                        </section>
                        <div className='flex w-[90%] sm:flex-col justify-between mx-auto'>
                                <section className='flex flex-col sm:w-full w-[30%]'>
                                        <div className='flex mt-14 w-full cursor-pointer bg-[#ff6666] hover:bg-[#900000] p-10' onClick={() => setCurrent("Education")}>
                                                <svg className="w-[100px] h-[50px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="28" height="28" rx="4" fill="black" />
                                                        <path d="M13.8822 12.2415C14.0516 12.3043 14.2177 12.1507 14.1616 11.9874C13.7763 10.8662 12.3814 10.4479 11.0848 11.4427C10.4027 11.966 10.1464 12.0772 10.1399 12.08C10.5896 12.5046 11.1033 13.9294 12.2244 14.087C13.4593 14.2984 14.5523 13.1509 13.6581 12.6258C13.07 12.2805 12.3776 12.0799 11.6353 12.0799C12.4134 11.9143 13.1902 11.9853 13.8822 12.2415Z" fill="#fff" />
                                                        <path d="M19.4744 11.4426C17.2361 9.72543 15.8086 12.4334 16.6959 12.1649C17.3261 11.9743 18.0151 11.9328 18.7061 12.0799C17.5352 12.0799 16.4559 12.5867 15.7363 13.4116C15.7954 12.1152 15.8848 11.3038 15.9884 10.7002C16.5865 10.6808 17.3837 10.2246 17.8215 9.42644C18.5762 8.15082 18.2262 6.84289 18.1136 6.01758C17.5238 6.55993 14.9478 5.92444 13.9266 7.57717C13.4754 8.30725 13.6066 9.19567 14.0811 9.8458C14.2313 10.0516 14.5905 9.95286 14.6008 9.70309C14.6453 8.61656 15.2179 7.79566 16.2853 7.34098C15.8063 7.9271 15.4918 8.58331 15.3294 9.26154C15.0768 10.3181 14.8131 11.0111 14.7162 14.3786C14.7064 14.7201 14.9993 15.0028 15.361 14.9985C15.6229 14.9954 15.8472 14.8385 15.9479 14.6102C16.101 14.263 16.3503 13.9036 16.756 13.5743C17.1414 13.9767 17.728 14.1909 18.335 14.0869C19.4513 13.93 19.9723 12.5021 20.4194 12.0798C20.4128 12.0771 20.1565 11.9659 19.4744 11.4426Z" fill="#fff" />
                                                        <path d="M22.7649 15.6384C22.0651 15.19 21.3035 15.5096 20.9538 15.7003L16.5647 18.7342L13.9947 18.7347L13.3523 18.128H15.7124C16.4222 18.128 17.2172 17.6913 17.2172 16.9141C17.2172 16.089 16.4222 15.7003 15.7124 15.7003H14.828C14.1709 15.7003 13.4031 15.7556 12.8618 15.4819C12.3474 15.2347 11.7551 15.0941 11.1229 15.0941C10.0612 15.0941 9.11104 15.4938 8.45992 16.1242L5 19.341L8.85489 22.9817L10.1399 21.1614H16.2119C16.8595 21.1614 17.4846 20.937 17.9687 20.5308L22.8088 16.4701C23.0779 16.2444 23.0627 15.8293 22.7649 15.6384Z" fill="#fff" />
                                                </svg>

                                                <div className='ml-5'>
                                                        <h2 className='text-2xl text-[#1D2130] font-semibold'>Education and Human Capacity</h2>
                                                        <p className=' sm:w-[100%] mt-4'>
                                                                Unlocking potential through learning and knowledge, and Empowering individuals to thrive and succeed (SDG 4 and SDG 9)
                                                        </p>
                                                </div>

                                        </div>
                                        <div className='flex mt-14 hover:bg-[#900000] bg-[#ff6666] p-10 w-full cursor-pointer' onClick={() => setCurrent("Health")}>
                                                <svg className="w-[70px] h-[50px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="28" height="28" rx="4" fill="black" />
                                                        <path d="M20.2904 11.7302L20.2633 11.6935L20.2579 11.6827L17.7931 8.02372L15.3283 11.6828L15.3231 11.693L15.2957 11.7302C14.9002 12.2659 14.6912 12.9023 14.6912 13.5706C14.6912 15.281 16.0827 16.6725 17.7931 16.6725C19.5034 16.6725 20.8949 15.281 20.8949 13.5706C20.895 12.9022 20.6859 12.2658 20.2904 11.7302Z" fill="#fff" />
                                                        <path d="M17.7931 17.7293C15.5 17.7293 13.6344 15.8637 13.6344 13.5705C13.6344 12.6791 13.9121 11.8297 14.4376 11.1133L16.0579 8.70794L13.56 5L8.35563 12.7257C7.53737 13.8392 7.10498 15.1595 7.10498 16.5449C7.10498 20.1043 10.0007 23 13.56 23C16.9325 23 19.7088 20.4002 19.991 17.0994C19.3529 17.4984 18.5996 17.7293 17.7931 17.7293Z" fill="#fff" />
                                                </svg>

                                                <div className='ml-5'>
                                                        <h2 className='text-2xl text-[#1D2130] font-semibold'>Health</h2>
                                                        <p className=' sm:w-[100%] mt-4'>
                                                                Promoting wellness and ensuring access to essential healthcare for all (SDG 3)
                                                        </p>
                                                </div>

                                        </div>
                                        <div className='flex mt-14 hover:bg-[#900000] bg-[#ff6666] p-10 w-full cursor-pointer' onClick={() => setCurrent("Environment")}>
                                                <svg className="w-[100px] h-[50px]" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect y="0.359375" width="28" height="28" rx="4" fill="black" />
                                                        <path d="M14.9395 18.957H15.8184V21.3594H14.9395V18.957Z" fill="#fff" />
                                                        <path d="M13.1816 18.957H14.0605V21.3594H13.1816V18.957Z" fill="#fff" />
                                                        <path d="M17.459 6.35938H11.541C11.2983 6.35938 11.1016 6.55613 11.1016 6.79883V21.3594H12.3027V18.5176C12.3027 18.2749 12.4995 18.0781 12.7422 18.0781H16.2578C16.5005 18.0781 16.6973 18.2749 16.6973 18.5176V21.3594H17.8984V6.79883C17.8984 6.55613 17.7017 6.35938 17.459 6.35938ZM13.1816 16.7598C13.1816 17.0025 12.9849 17.1992 12.7422 17.1992C12.4995 17.1992 12.3027 17.0025 12.3027 16.7598V15.8809C12.3027 15.6382 12.4995 15.4414 12.7422 15.4414C12.9849 15.4414 13.1816 15.6382 13.1816 15.8809V16.7598ZM13.1816 14.123C13.1816 14.3657 12.9849 14.5625 12.7422 14.5625C12.4995 14.5625 12.3027 14.3657 12.3027 14.123V13.2441C12.3027 13.0014 12.4995 12.8047 12.7422 12.8047C12.9849 12.8047 13.1816 13.0014 13.1816 13.2441V14.123ZM14.9395 16.7598C14.9395 17.0025 14.7427 17.1992 14.5 17.1992C14.2573 17.1992 14.0605 17.0025 14.0605 16.7598V15.8809C14.0605 15.6382 14.2573 15.4414 14.5 15.4414C14.7427 15.4414 14.9395 15.6382 14.9395 15.8809V16.7598ZM14.9395 14.123C14.9395 14.3657 14.7427 14.5625 14.5 14.5625C14.2573 14.5625 14.0605 14.3657 14.0605 14.123V13.2441C14.0605 13.0014 14.2573 12.8047 14.5 12.8047C14.7427 12.8047 14.9395 13.0014 14.9395 13.2441V14.123ZM16.6973 16.7598C16.6973 17.0025 16.5005 17.1992 16.2578 17.1992C16.0151 17.1992 15.8184 17.0025 15.8184 16.7598V15.8809C15.8184 15.6382 16.0151 15.4414 16.2578 15.4414C16.5005 15.4414 16.6973 15.6382 16.6973 15.8809V16.7598ZM16.6973 14.123C16.6973 14.3657 16.5005 14.5625 16.2578 14.5625C16.0151 14.5625 15.8184 14.3657 15.8184 14.123V13.2441C15.8184 13.0014 16.0151 12.8047 16.2578 12.8047C16.5005 12.8047 16.6973 13.0014 16.6973 13.2441V14.123ZM13.1816 11.4863C13.1816 11.729 12.9849 11.9258 12.7422 11.9258C12.4995 11.9258 12.3027 11.729 12.3027 11.4863V10.6074C12.3027 10.3647 12.4995 10.168 12.7422 10.168C12.9849 10.168 13.1816 10.3647 13.1816 10.6074V11.4863ZM14.9395 11.4863C14.9395 11.729 14.7427 11.9258 14.5 11.9258C14.2573 11.9258 14.0605 11.729 14.0605 11.4863V10.6074C14.0605 10.3647 14.2573 10.168 14.5 10.168C14.7427 10.168 14.9395 10.3647 14.9395 10.6074V11.4863ZM16.6973 11.4863C16.6973 11.729 16.5005 11.9258 16.2578 11.9258C16.0151 11.9258 15.8184 11.729 15.8184 11.4863V10.6074C15.8184 10.3647 16.0151 10.168 16.2578 10.168C16.5005 10.168 16.6973 10.3647 16.6973 10.6074V11.4863ZM13.1816 8.84961C13.1816 9.0923 12.9849 9.28906 12.7422 9.28906C12.4995 9.28906 12.3027 9.0923 12.3027 8.84961V7.9707C12.3027 7.72801 12.4995 7.53125 12.7422 7.53125C12.9849 7.53125 13.1816 7.72801 13.1816 7.9707V8.84961ZM14.9395 8.84961C14.9395 9.0923 14.7427 9.28906 14.5 9.28906C14.2573 9.28906 14.0605 9.0923 14.0605 8.84961V7.9707C14.0605 7.72801 14.2573 7.53125 14.5 7.53125C14.7427 7.53125 14.9395 7.72801 14.9395 7.9707V8.84961ZM16.6973 8.84961C16.6973 9.0923 16.5005 9.28906 16.2578 9.28906C16.0151 9.28906 15.8184 9.0923 15.8184 8.84961V7.9707C15.8184 7.72801 16.0151 7.53125 16.2578 7.53125C16.5005 7.53125 16.6973 7.72801 16.6973 7.9707V8.84961Z" fill="#fff" />
                                                        <path d="M21.5605 12.2188H18.7773V21.3594H21.5605C21.8032 21.3594 22 21.1626 22 20.9199V12.6582C22 12.4155 21.8032 12.2188 21.5605 12.2188ZM20.8281 17.9316C20.8281 18.1743 20.6314 18.3711 20.3887 18.3711C20.146 18.3711 19.9492 18.1743 19.9492 17.9316V17.0527C19.9492 16.81 20.146 16.6133 20.3887 16.6133C20.6314 16.6133 20.8281 16.81 20.8281 17.0527V17.9316ZM20.8281 15.2949C20.8281 15.5376 20.6314 15.7344 20.3887 15.7344C20.146 15.7344 19.9492 15.5376 19.9492 15.2949V14.416C19.9492 14.1733 20.146 13.9766 20.3887 13.9766C20.6314 13.9766 20.8281 14.1733 20.8281 14.416V15.2949Z" fill="#fff" />
                                                        <path d="M7.43945 12.2188C7.19676 12.2188 7 12.4155 7 12.6582V20.9199C7 21.1626 7.19676 21.3594 7.43945 21.3594H10.2227V12.2188H7.43945ZM9.05078 17.9316C9.05078 18.1743 8.85402 18.3711 8.61133 18.3711C8.36863 18.3711 8.17188 18.1743 8.17188 17.9316V17.0527C8.17188 16.81 8.36863 16.6133 8.61133 16.6133C8.85402 16.6133 9.05078 16.81 9.05078 17.0527V17.9316ZM9.05078 15.2949C9.05078 15.5376 8.85402 15.7344 8.61133 15.7344C8.36863 15.7344 8.17188 15.5376 8.17188 15.2949V14.416C8.17188 14.1733 8.36863 13.9766 8.61133 13.9766C8.85402 13.9766 9.05078 14.1733 9.05078 14.416V15.2949Z" fill="#fff" />
                                                </svg>
                                                <div className='ml-5'>
                                                        <h2 className='text-2xl text-[#1D2130] font-semibold'>Environment </h2>
                                                        <p className=' sm:w-[100%] mt-4'>
                                                                Advocating for a greener, more sustainable future for generations to come (SDG 6,7, and 15)
                                                        </p>
                                                </div>

                                        </div>
                                </section>
                                <section className='w-[60%] sm:w-full  mt-14'>
                                        <div className={current === "Education" ? 'block ' : 'hidden sm:block sm:mt-10'}>
                                                <h2 className='text-4xl text-[#1D2130] font-semibold'>Education</h2>
                                                <p className='mt-5 font-normal'>At VITAL BRIDGE, we believe in the transformative power of education.
                                                </p>
                                                <h2 className='font-semibold mt-5 italic'>Under our Education focus area, we are dedicated to: </h2>
                                                <h2 className='font-semibold '>A) Providing educational relief materials to schools and students in need</h2>
                                                <p>Through strategic partnerships and community engagement, we identify schools and students facing educational challenges and provide tailored support to address their needs through:</p>
                                                <ul className='list-disc ml-10'>
                                                        <li>Distribution of educational relief materials such as textbooks, stationery, and learning aids
                                                        </li>
                                                        <li>Collaborative projects with schools to improve infrastructure and learning facilities</li>
                                                        <li>Training sessions for teachers on innovative teaching methods and educational best practices.</li>
                                                </ul>
                                                <h2 className='font-semibold mt-5'>Our aim is to:</h2>
                                                <ul className='list-disc ml-10'>
                                                        <li>Increase school enrolment and retention rates.
                                                        </li>
                                                        <li>Improve academic performance and student outcomes.</li>
                                                        <li>Empower communities through education as a catalyst for socio-economic development.</li>
                                                </ul>

                                                <h2 className='font-semibold mt-5'>B)   Scholarships                </h2>
                                                <p>Our NGO is committed to fostering education by offering scholarships to indigent Nigerian students pursuing secondary or post-secondary education in public schools. We invite applications once a year, typically between January and March, from eligible candidates across the nation. Click here to view the eligibility criteria. Our scholarship program aims to empower indigent students to pursue their academic dreams. Prospective applicants are encouraged to participate in this noble endeavor.
                                                </p>

                                                <h2 className='font-semibold mt-5'>Eligibility Criteria:</h2>
                                                <ul className='list-disc ml-10'>
                                                        <li>Must be a Nigerian citizen.
                                                        </li>
                                                        <li>Age</li>
                                                        <ul>
                                                                <li>Secondary Education: Applicants must be between 12 and 18 years old.</li>
                                                                <li>Post-Secondary Education: Applicants must be between 18 and 25 years old</li>
                                                        </ul>
                                                        <li>Enrolled full-time in a public secondary or post-secondary academic program.</li>
                                                        <li>Academic achievement: Minimum of second class upper or its equivalent.</li>
                                                        <li>Consideration for emergency and ad-hoc financial support may be provided.</li>
                                                        <li>Other support, such as for postgraduate programs, projects, and Jambites, are determined on a case-by-case by the governing council or board of trustees.</li>
                                                </ul>

                                                <h2 className='font-semibold mt-5'>Our aim is to:</h2>
                                                <ul className='list-disc ml-10'>
                                                        <li>Completed scholarship form.
                                                        </li>
                                                        <li>Essay detailing financial background.</li>
                                                        <li>School fees invoice.</li>
                                                        <li>Two reference letters, including one academic reference.</li>
                                                </ul>

                                        </div>
                                        <div className={current === "Health" ? 'block' : 'hidden sm:block sm:mt-10 sm:mb-10'}>
                                                <h2 className='text-4xl text-[#1D2130] font-semibold'>Health</h2>
                                                <p className='mt-5 font-normal'>At our foundation, we prioritize the health and well-being of individuals and communities. Through our Health Initiative, we aim to promote wellness and ensure access to quality healthcare services for all through: </p>
                                                <ul className='list-disc'>
                                                        <li className='mt-2'>
                                                                <span className='font-semibold '>Health Awareness Campaigns: </span> We organize awareness campaigns on various health issues, including sanitation, hygiene, nutrition, and disease prevention.

                                                        </li>
                                                        <li className='mt-4'><span className='font-semibold '>Medical Outreach Programs:</span>  Our foundation conducts medical outreach programs, providing free screenings, vaccinations, and healthcare services to communities in need.</li>
                                                        <li className='mt-4'><span className='font-semibold '>Capacity Building:</span> We support healthcare facilities and personnel through training programs, equipment donations, and infrastructure development projects.
                                                        </li>
                                                        <li className='mt-4'><span className='font-semibold '>Partnerships:</span> We collaborate with healthcare organisations, government agencies, and other stakeholders to maximise our impact and reach.
                                                        </li>
                                                        <li className='mt-4'><span className='font-semibold '>Celebrating World Health Days:</span> Raise awareness and commemorate significant World Health Days to highlight important health issues and promote action for better health outcomes globally.</li>
                                                </ul>
                                        </div>
                                        <div className={current === "Environment" ? 'block' : 'hidden sm:block sm:mt-10'}>
                                                <h2 className='text-4xl text-[#1D2130] font-semibold'>Environment </h2>
                                                <p className='mt-5 font-normal'>At our foundation, we are committed to environmental sustainability and protecting our planet for future generations. Through our Environmental Sustainability Initiative, we aim to reduce plastic waste, advocate for a greener Earth, create awareness through educational programs, promote recycling and reusing, celebrate global climate days, and align with the Sustainable Development Goals (SDGs) to prevent global warming and preserve our environment.</p>
                                                <h2 className='font-semibold mt-5'>Program Overview (Pictures)</h2>
                                                <ul className='list-disc ml-10'>
                                                        <li className='mt-2'>
                                                                Plastic Waste Reduction Campaigns.
                                                        </li>
                                                        <li className='mt-4'>Green Advocacy Initiatives</li>
                                                        <li className='mt-4'>Educational Programs on environmental conservation and sustainable living practices.
                                                        </li>
                                                        <li className='mt-4'>Recycling and Reusing Initiatives
                                                        </li>
                                                        <li className='mt-4'>Global Climate Day Celebrations</li>
                                                        <li className='mt-4'>SDG Alignment: Ensure that our initiatives are aligned with the Sustainable Development Goals, particularly Goal 13 (Climate Action) and Goal 15 (Life on Land), to contribute to global efforts to combat climate change and preserve biodiversity.</li>
                                                </ul>
                                        </div>
                                        <div></div>
                                </section>
                        </div>

                </div>
        )
}

export default SpecialNeeds