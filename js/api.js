const db = {
    tours: [
        {
            id: 1,
            name: 'Khám phá Đà Lạt 3 ngày 2 đêm',
            destination: 'Đà Lạt',
            duration: '3 ngày 2 đêm',
            price: 2500000,
            discount: 10,
            groupSize: 20,
            category: 'domestic',
            status: 'active',
            description: 'Khám phá thành phố ngàn hoa Đà Lạt với những địa điểm nổi tiếng như hồ Xuân Hương, thung lũng Tình Yêu, và nhiều điểm tham quan thú vị khác.',
            itinerary: 'Ngày 1: TP.HCM - Đà Lạt\nDi chuyển từ TP.HCM đến Đà Lạt. Check-in khách sạn. Tham quan chợ đêm Đà Lạt.\n\nNgày 2: Tham quan Đà Lạt\nTham quan Thiền Viện Trúc Lâm, Hồ Tuyền Lâm, Đồi Robin, Thung lũng Tình Yêu.\n\nNgày 3: Đà Lạt - TP.HCM\nTham quan Làng Cù Lần, mua sắm đặc sản. Trở về TP.HCM.',
            image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/342/038/products/gioi-thieu-ve-da-lat-1-1-jpg-v-1706500854530-bc3b54af-032a-4bc3-bc4f-4b994e311ef4-jpg-v-1706507674117-87b4753c-35a9-4aa8-bb13-a6dd00d156c2.jpg?v=1706586286750',
            bookingCount: 125,
            rating: 4.5
        },
        {
            id: 2,
            name: 'Khám phá Phú Quốc 4 ngày 3 đêm',
            destination: 'Phú Quốc',
            duration: '4 ngày 3 đêm',
            price: 5500000,
            discount: 15,
            groupSize: 15,
            category: 'domestic',
            status: 'active',
            description: 'Khám phá đảo ngọc Phú Quốc với những bãi biển đẹp như tranh vẽ, nước biển trong xanh, và nhiều hoạt động thú vị như lặn biển, câu cá, tham quan các đảo nhỏ.',
            itinerary: 'Ngày 1: TP.HCM - Phú Quốc\nDi chuyển từ TP.HCM đến Phú Quốc. Check-in khách sạn. Tham quan bãi Sao.\n\nNgày 2: Tham quan Nam Đảo\nTham quan Bãi Sao, nhà tù Phú Quốc, vườn tiêu, làng chài Hàm Ninh.\n\nNgày 3: Tham quan Bắc Đảo\nTham quan Vinpearl Land, Safari, Cáp treo Hòn Thơm.\n\nNgày 4: Phú Quốc - TP.HCM\nTham quan chợ Dương Đông, mua sắm đặc sản. Trở về TP.HCM.',
            image: 'https://media.loveitopcdn.com/40838/thumb/upload/images/tour-du-lich-phu-quoc-3-ngay-khach-le-gia-re.jpg',
            bookingCount: 180,
            rating: 4.8
        },
        {
            id: 3,
            name: 'Tour Hà Nội - Hạ Long 5 ngày 4 đêm',
            destination: 'Hà Nội, Hạ Long',
            duration: '5 ngày 4 đêm',
            price: 6500000,
            discount: 5,
            groupSize: 25,
            category: 'domestic',
            status: 'active',
            description: 'Khám phá thủ đô Hà Nội và vịnh Hạ Long - Di sản thiên nhiên thế giới với hơn 1600 hòn đảo đá vôi được bao phủ bởi làn nước xanh ngọc bích.',
            itinerary: 'Ngày 1: TP.HCM - Hà Nội\nDi chuyển từ TP.HCM đến Hà Nội. Check-in khách sạn. Tham quan phố cổ Hà Nội.\n\nNgày 2: Tham quan Hà Nội\nTham quan Lăng Bác, Văn Miếu - Quốc Tử Giám, Hồ Hoàn Kiếm.\n\nNgày 3: Hà Nội - Hạ Long\nDi chuyển từ Hà Nội đến Hạ Long. Check-in du thuyền. Tham quan vịnh Hạ Long.\n\nNgày 4: Hạ Long - Hà Nội\nTham quan hang Sửng Sốt. Trở về Hà Nội.\n\nNgày 5: Hà Nội - TP.HCM\nTham quan bảo tàng Hà Nội, mua sắm. Trở về TP.HCM.',
            bookingCount: 150,
            bookingCount: 150,
            image: 'https://ik.imagekit.io/tvlk/blog/2022/08/pho-co-ha-noi-11.jpg?tr=q-70,c-at_max,w-500,h-250,dpr-2',
            bookingCount: 150,
            rating: 4.7
        },
        {
            id: 4,
            name: 'Tour Đà Nẵng - Hội An - Huế 6 ngày 5 đêm',
            destination: 'Đà Nẵng, Hội An, Huế',
            duration: '6 ngày 5 đêm',
            price: 7500000,
            discount: 12,
            groupSize: 20,
            category: 'domestic',
            status: 'active',
            description: 'Khám phá miền Trung Việt Nam với những di sản văn hóa thế giới như phố cổ Hội An, cố đô Huế, và những bãi biển đẹp như Mỹ Khê, Non Nước.',
            itinerary: 'Ngày 1: TP.HCM - Đà Nẵng\nDi chuyển từ TP.HCM đến Đà Nẵng. Check-in khách sạn. Tham quan bãi biển Mỹ Khê.\n\nNgày 2: Tham quan Đà Nẵng\nTham quan Bà Nà Hills, Cầu Vàng, Cầu Rồng.\n\nNgày 3: Đà Nẵng - Hội An\nDi chuyển từ Đà Nẵng đến Hội An. Tham quan phố cổ Hội An, làng gốm Thanh Hà.\n\nNgày 4: Hội An - Huế\nDi chuyển từ Hội An đến Huế qua đèo Hải Vân. Tham quan lăng Khải Định.\n\nNgày 5: Tham quan Huế\nTham quan Đại Nội, chùa Thiên Mụ, sông Hương.\n\nNgày 6: Huế - TP.HCM\nTham quan chợ Đông Ba, mua sắm. Trở về TP.HCM.',
            image: 'https://nhuminhplazahotel.com/wp-content/uploads/2023/04/du-lich-hue-da-nang-hoi-an-nhuminhplaza2-800x565.jpeg',
            bookingCount: 135,
            rating: 4.6
        },
        {
            id: 5,
            name: 'Tour Bangkok - Pattaya 5 ngày 4 đêm',
            destination: 'Bangkok, Pattaya',
            duration: '5 ngày 4 đêm',
            price: 9500000,
            discount: 8,
            groupSize: 25,
            category: 'international',
            status: 'active',
            description: 'Khám phá Thái Lan với những địa điểm nổi tiếng như Bangkok nhộn nhịp, Pattaya sôi động với nhiều hoạt động giải trí và mua sắm.',
            itinerary: 'Ngày 1: TP.HCM - Bangkok\nDi chuyển từ TP.HCM đến Bangkok. Check-in khách sạn. Tham quan chợ đêm.\n\nNgày 2: Tham quan Bangkok\nTham quan Cung điện Hoàng gia, chùa Phật Ngọc, chùa Wat Arun.\n\nNgày 3: Bangkok - Pattaya\nDi chuyển từ Bangkok đến Pattaya. Tham quan đảo San Hô bằng cano.\n\nNgày 4: Tham quan Pattaya\nTham quan làng văn hóa Nong Nooch, show Alcazar.\n\nNgày 5: Pattaya - Bangkok - TP.HCM\nMua sắm tại trung tâm Bangkok. Trở về TP.HCM.',
            image: 'https://longphutravel.com/uploads/gallery/bangkok-pattaya-2023/thai-lan-bangkok-pattaya-bay-thang-tu-tpho-chi-minh-longphutourist-00.jpg',
            bookingCount: 200,
            rating: 4.5
        },
        {
            id: 6,
            name: 'Tour Singapore - Malaysia 6 ngày 5 đêm',
            destination: 'Singapore, Kuala Lumpur',
            duration: '6 ngày 5 đêm',
            price: 12500000,
            discount: 10,
            groupSize: 20,
            category: 'international',
            status: 'active',
            description: 'Khám phá hai quốc gia phát triển của Đông Nam Á: Singapore hiện đại và Malaysia đa văn hóa với nhiều địa điểm du lịch hấp dẫn.',
            itinerary: 'Ngày 1: TP.HCM - Singapore\nDi chuyển từ TP.HCM đến Singapore. Check-in khách sạn. Tham quan Gardens by the Bay.\n\nNgày 2: Tham quan Singapore\nTham quan đảo Sentosa, Universal Studios, S.E.A Aquarium.\n\nNgày 3: Singapore - Malacca\nDi chuyển từ Singapore đến Malacca. Tham quan phố cổ Malacca.\n\nNgày 4: Malacca - Kuala Lumpur\nDi chuyển từ Malacca đến Kuala Lumpur. Tham quan tháp đôi Petronas, quảng trường Độc lập.\n\nNgày 5: Tham quan Kuala Lumpur\nTham quan động Batu, đồi Genting.\n\nNgày 6: Kuala Lumpur - TP.HCM\nMua sắm tại KLCC. Trở về TP.HCM.',
            image: 'https://cdn3.ivivu.com/2024/09/Tour-Singapore-Malaysia-5N4D.png',
            bookingCount: 170,
            rating: 4.7
        }
    ],
    bookings: [
        {
            id: 1,
            tourId: 1,
            userId: 2,
            customerName: 'Nguyễn Văn Huy',
            email: 'nguyenvana@email.com',
            phone: '0901234567',
            travelDate: '2025-05-15',
            bookingDate: '2025-03-01',
            numPersons: 2,
            totalAmount: 4500000,
            status: 'confirmed',
            notes: 'Yêu cầu phòng với view đẹp',
            tourName: 'Khám phá Đà Lạt 3 ngày 2 đêm',
            destination: 'Đà Lạt',
            duration: '3 ngày 2 đêm',
            price: 2500000,
            discount: 10,
            tourImage: 'https://vietnamtravelmart.com.vn/wp-content/uploads/vietnamtravelmart_img.jpg'
        },
        {
            id: 2,
            tourId: 2,
            userId: 3,
            customerName: 'Trần Văn HUy',
            email: 'tranthib@email.com',
            phone: '0336531983',
            travelDate: '2025-06-10',
            bookingDate: '2025-03-05',
            numPersons: 3,
            totalAmount: 14025000,
            status: 'pending',
            notes: 'Có trẻ em 5 tuổi đi cùng',
            tourName: 'Khám phá Phú Quốc 4 ngày 3 đêm',
            destination: 'Phú Quốc',
            duration: '4 ngày 3 đêm',
            price: 5500000,
            discount: 15,
            tourImage: 'https://vietnamtravelmart.com.vn/wp-content/uploads/vietnamtravelmart_img.jpg'
        },
        {
            id: 3,
            tourId: 3,
            userId: 2,
            customerName: 'Nguyễn Duy Chiến',
            email: 'nguyenvana@email.com',
            phone: '0901234567',
            travelDate: '2025-07-20',
            bookingDate: '2025-03-10',
            numPersons: 2,
            totalAmount: 12350000,
            status: 'confirmed',
            notes: '',
            tourName: 'Tour Hà Nội - Hạ Long 5 ngày 4 đêm',
            destination: 'Hà Nội, Hạ Long',
            duration: '5 ngày 4 đêm',
            price: 6500000,
            discount: 5,
            tourImage: 'https://vietnamtravelmart.com.vn/wp-content/uploads/vietnamtravelmart_img.jpg'
        },
        {
            id: 4,
            tourId: 5,
            userId: 4,
            customerName: 'Lê Thị Phương',
            email: 'levanc@email.com',
            phone: '0923456789',
            travelDate: '2025-08-05',
            bookingDate: '2025-03-15',
            numPersons: 4,
            totalAmount: 34960000,
            status: 'cancelled',
            notes: 'Hủy vì lý do cá nhân',
            tourName: 'Tour Bangkok - Pattaya 5 ngày 4 đêm',
            destination: 'Bangkok, Pattaya',
            duration: '5 ngày 4 đêm',
            price: 9500000,
            discount: 8,
            tourImage: 'https://vietnamtravelmart.com.vn/wp-content/uploads/vietnamtravelmart_img.jpg'
        },
        {
            id: 5,
            tourId: 6,
            userId: 5,
            customerName: 'Phạm Thị Hảo',
            email: 'phamthid@email.com',
            phone: '0934567890',
            travelDate: '2025-09-15',
            bookingDate: '2025-03-20',
            numPersons: 2,
            totalAmount: 22500000,
            status: 'pending',
            notes: 'Cần hỗ trợ visa',
            tourName: 'Tour Singapore - Malaysia 6 ngày 5 đêm',
            destination: 'Singapore, Kuala Lumpur',
            duration: '6 ngày 5 đêm',
            price: 12500000,
            discount: 10,
            tourImage: 'https://vietnamtravelmart.com.vn/wp-content/uploads/vietnamtravelmart_img.jpg'
        }
    ],
    users: [
        {
            id: 1,
            name: 'Admin',
            email: 'admin@dreamtravel.com',
            phone: '0987654321',
            password: 'admin123',
            role: 'admin',
            status: 'active',
            registrationDate: '2024-01-01'
        },
        {
            id: 2,
            name: 'Nguyễn Văn Huy',
            email: 'nguyenvana@email.com',
            phone: '0901234567',
            password: 'password123',
            role: 'user',
            status: 'active',
            registrationDate: '2025-02-01'
        },
        {
            id: 3,
            name: 'Trần Văn Huy',
            email: 'tranthib@email.com',
            phone: '0912345678',
            password: 'password123',
            role: 'user',
            status: 'active',
            registrationDate: '2025-02-05'
        },
        {
            id: 4,
            name: 'Lê Thị Phương',
            email: 'levanc@email.com',
            phone: '0923456789',
            password: 'password123',
            role: 'user',
            status: 'active',
            registrationDate: '2025-02-10'
        },
        {
            id: 5,
            name: 'Phạm Thị Hảo',
            email: 'phamthid@email.com',
            phone: '0934567890',
            password: 'password123',
            role: 'user',
            status: 'active',
            registrationDate: '2025-02-15'
        }
    ]
};


let tourIdCounter = db.tours.length + 1;
let bookingIdCounter = db.bookings.length + 1;
let userIdCounter = db.users.length + 1;

function getFeaturedTours() {
    return new Promise((resolve) => {
        setTimeout(() => {
           
            const activeTours = db.tours.filter(tour => tour.status === 'active');
            resolve(activeTours); 
        }, 300);
    });
}


function getTourDetails(tourId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tour = db.tours.find(tour => tour.id == tourId);
            
            if (tour) {
                resolve(tour);
            } else {
                reject('Tour not found');
            }
        }, 300);
    });
}


function login(username, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let userData = null;

            if (username === 'admin' && password === 'admin123') {
                userData = {
                    success: true,
                    userId: 1,
                    username: 'Admin',
                    role: 'admin'
                };
            } else if (db && db.users) {
           
                const user = db.users.find(user => 
                    (user.email === username || user.phone === username) && 
                    user.password === password && 
                    user.status === 'active'
                );

                if (user) {
                    userData = {
                        success: true,
                        userId: user.id,
                        username: user.name,
                        role: user.role
                    };
                }
            }

          
            if (userData) {
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('username', userData.username);
                localStorage.setItem('userRole', userData.role);

                resolve(userData);
                window.location.reload();
            } else {
                resolve({
                    success: false,
                    message: 'Tên đăng nhập hoặc mật khẩu không đúng'
                });
            }
        }, 500);
    });
}


function addBooking(bookingData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const tour = db.tours.find(tour => tour.id == bookingData.tourId);
            
            if (!tour) {
                resolve({
                    success: false,
                    message: 'Tour không tồn tại'
                });
                return;
            }
      
            const discountedPrice = tour.discount ? tour.price * (1 - tour.discount / 100) : tour.price;
            const totalAmount = discountedPrice * bookingData.numPersons;
            
          
            const newBooking = {
                id: bookingIdCounter++,
                tourId: parseInt(bookingData.tourId),
                userId: bookingData.userId ? parseInt(bookingData.userId) : null,
                customerName: bookingData.fullName,
                email: bookingData.email,
                phone: bookingData.phone,
                travelDate: bookingData.travelDate,
                bookingDate: new Date().toISOString().split('T')[0],
                numPersons: parseInt(bookingData.numPersons),
                totalAmount: totalAmount,
                status: 'pending',
                notes: bookingData.notes,
                tourName: tour.name,
                destination: tour.destination,
                duration: tour.duration,
                price: tour.price,
                discount: tour.discount,
                tourImage: tour.image
            };
            
        
            db.bookings.push(newBooking);
            
            resolve({
                success: true,
                bookingId: newBooking.id,
                message: 'Đặt tour thành công'
            });
        }, 500);
    });
}


function getUserBookings(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const bookings = db.bookings.filter(booking => booking.userId == userId);
            resolve(bookings);
        }, 300);
    });
}


function adminLoginApi(username, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const admin = db.users.find(user => 
                user.email === username && 
                user.password === password && 
                user.role === 'admin' &&
                user.status === 'active'
            );
            
            if (admin) {
                resolve({
                    success: true,
                    adminId: admin.id
                });
            } else if (username === 'admin' && password === 'admin123') {
                
                resolve({
                    success: true,
                    adminId: 1
                });
            } else {
                resolve({
                    success: false,
                    message: 'Tên đăng nhập hoặc mật khẩu không đúng'
                });
            }
        }, 500);
    });
}


function getDashboardStats() {
    return new Promise((resolve) => {
        setTimeout(() => {
      
            const totalRevenue = db.bookings.reduce((total, booking) => {
                
                if (booking.status === 'confirmed' || booking.status === 'completed') {
                    return total + booking.totalAmount;
                }
                return total;
            }, 0);
            
            const stats = {
                totalTours: db.tours.length,
                totalBookings: db.bookings.length,
                totalUsers: db.users.filter(user => user.role === 'user').length,
                totalRevenue: totalRevenue
            };
            
            resolve(stats);
        }, 300);
    });
}


function getRecentBookings() {
    return new Promise((resolve) => {
        setTimeout(() => {
        
            const recentBookings = [...db.bookings]
                .sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate))
                .slice(0, 5);
            
            resolve(recentBookings);
        }, 300);
    });
}


function getPopularTours() {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            const popularTours = [...db.tours]
                .sort((a, b) => b.bookingCount - a.bookingCount)
                .slice(0, 5);
            
            resolve(popularTours);
        }, 300);
    });
}


function getTours(search = '', category = '', status = '') {
    return new Promise((resolve) => {
        setTimeout(() => {
            let filteredTours = [...db.tours];
         
            if (search) {
                const searchLower = search.toLowerCase();
                filteredTours = filteredTours.filter(tour => 
                    tour.name.toLowerCase().includes(searchLower) ||
                    tour.destination.toLowerCase().includes(searchLower)
                );
            }
         
            if (category) {
                filteredTours = filteredTours.filter(tour => tour.category === category);
            }
           
            if (status) {
                filteredTours = filteredTours.filter(tour => tour.status === status);
            }
            
            resolve(filteredTours);
        }, 300);
    });
}


function addTour(tourData) {
    return new Promise((resolve) => {
        setTimeout(() => {
      
            const newTour = {
                id: tourIdCounter++,
                name: tourData.name,
                destination: tourData.destination,
                duration: tourData.duration,
                price: parseInt(tourData.price),
                discount: parseInt(tourData.discount || 0),
                groupSize: parseInt(tourData.groupSize),
                category: tourData.category,
                status: tourData.status,
                description: tourData.description,
                itinerary: tourData.itinerary,
                image: tourData.image || `https://source.unsplash.com/800x600/?${tourData.destination.split(',')[0].trim().toLowerCase()}`,
                bookingCount: 0,
                rating: 0
            };
            
            db.tours.push(newTour);
            
            resolve({
                success: true,
                tourId: newTour.id,
                message: 'Thêm tour mới thành công'
            });
        }, 500);
    });
}


function updateTour(tourData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = db.tours.findIndex(tour => tour.id == tourData.id);
            
            if (index === -1) {
                resolve({
                    success: false,
                    message: 'Tour không tồn tại'
                });
                return;
            }
            
         
            db.tours[index] = {
                ...db.tours[index],
                name: tourData.name,
                destination: tourData.destination,
                duration: tourData.duration,
                price: parseInt(tourData.price),
                discount: parseInt(tourData.discount || 0),
                groupSize: parseInt(tourData.groupSize),
                category: tourData.category,
                status: tourData.status,
                description: tourData.description,
                itinerary: tourData.itinerary,
                image: tourData.image || db.tours[index].image
            };
            
            resolve({
                success: true,
                message: 'Cập nhật tour thành công'
            });
        }, 500);
    });
}


function deleteTourApi(tourId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = db.tours.findIndex(tour => tour.id == tourId);
            
            if (index === -1) {
                resolve({
                    success: false,
                    message: 'Tour không tồn tại'
                });
                return;
            }
            
    
            const hasBookings = db.bookings.some(booking => booking.tourId == tourId);
            
            if (hasBookings) {
                resolve({
                    success: false,
                    message: 'Không thể xóa tour đã có đơn đặt'
                });
                return;
            }
           
            db.tours.splice(index, 1);
            
            resolve({
                success: true,
                message: 'Xóa tour thành công'
            });
        }, 500);
    });
}


function getBookings(search = '', status = '', date = '') {
    return new Promise((resolve) => {
        setTimeout(() => {
            let filteredBookings = [...db.bookings];
            
            if (search) {
                const searchLower = search.toLowerCase();
                filteredBookings = filteredBookings.filter(booking => 
                    booking.customerName.toLowerCase().includes(searchLower) ||
                    booking.tourName.toLowerCase().includes(searchLower) ||
                    booking.id.toString().includes(searchLower)
                );
            }
            
            if (status) {
                filteredBookings = filteredBookings.filter(booking => booking.status === status);
            }
            
           
            if (date) {
                filteredBookings = filteredBookings.filter(booking => booking.bookingDate === date);
            }
            
            resolve(filteredBookings);
        }, 300);
    });
}


function getBookingDetails(bookingId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const booking = db.bookings.find(booking => booking.id == bookingId);
            
            if (booking) {
                resolve(booking);
            } else {
                reject('Booking not found');
            }
        }, 300);
    });
}

function deleteBookingApi(bookingId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = db.bookings.findIndex(booking => booking.id == bookingId);
            
            if (index === -1) {
                resolve({
                    success: false,
                    message: 'Đơn hàng không tồn tại'
                });
                return;
            }
            
           
            db.bookings.splice(index, 1);
            
            resolve({
                success: true,
                message: 'Xóa đơn hàng thành công'
            });
        }, 500);
    });
}


function getUsers(search = '', role = '') {
    return new Promise((resolve) => {
        setTimeout(() => {
            let filteredUsers = [...db.users];
            
            
            if (search) {
                const searchLower = search.toLowerCase();
                filteredUsers = filteredUsers.filter(user => 
                    user.name.toLowerCase().includes(searchLower) ||
                    user.email.toLowerCase().includes(searchLower) ||
                    (user.phone && user.phone.includes(search))
                );
            }
            
           
            if (role) {
                filteredUsers = filteredUsers.filter(user => user.role === role);
            }
            
            resolve(filteredUsers);
        }, 300);
    });
}


function getUserDetails(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = db.users.find(user => user.id == userId);
            
            if (user) {
           
                const { password, ...userWithoutPassword } = user;
                resolve(userWithoutPassword);
            } else {
                reject('User not found');
            }
        }, 300);
    });
}


function addUser(userData) {
    return new Promise((resolve) => {
        setTimeout(() => {
      
            const emailExists = db.users.some(user => user.email === userData.email);
            
            if (emailExists) {
                resolve({
                    success: false,
                    message: 'Email đã tồn tại'
                });
                return;
            }
            
      
            const newUser = {
                id: userIdCounter++,
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                password: userData.password || 'password123', 
                role: userData.role,
                status: userData.status,
                registrationDate: new Date().toISOString().split('T')[0]
            };
            
            
            db.users.push(newUser);
            
            resolve({
                success: true,
                userId: newUser.id,
                message: 'Thêm người dùng mới thành công'
            });
        }, 500);
    });
}


function updateUser(userData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = db.users.findIndex(user => user.id == userData.id);
            
            if (index === -1) {
                resolve({
                    success: false,
                    message: 'Người dùng không tồn tại'
                });
                return;
            }
            
           
            const emailExists = db.users.some(user => 
                user.email === userData.email && user.id != userData.id
            );
            
            if (emailExists) {
                resolve({
                    success: false,
                    message: 'Email đã tồn tại'
                });
                return;
            }
            

            db.users[index] = {
                ...db.users[index],
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                role: userData.role,
                status: userData.status
            };
      
            if (userData.password) {
                db.users[index].password = userData.password;
            }
            
            resolve({
                success: true,
                message: 'Cập nhật người dùng thành công'
            });
        }, 500);
    });
}


function deleteUserApi(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = db.users.findIndex(user => user.id == userId);
            
            if (index === -1) {
                resolve({
                    success: false,
                    message: 'Người dùng không tồn tại'
                });
                return;
            }
        
            const hasBookings = db.bookings.some(booking => booking.userId == userId);
            
            if (hasBookings) {
                resolve({
                    success: false,
                    message: 'Không thể xóa người dùng đã có đơn đặt tour'
                });
                return;
            }
           
            db.users.splice(index, 1);
            
            resolve({
                success: true,
                message: 'Xóa người dùng thành công'
            });
        }, 500);
    });
}