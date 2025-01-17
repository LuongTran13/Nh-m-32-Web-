export type DateBookedType = {
    date: Date;
    numberOfRoom: number;
}

export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: "admin" | "host" | "user"; // Chỉ cho phép các giá trị này
    status: "reject" | "pending" | "done"; // Chỉ cho phép các giá trị này
};

export type HotelType = { // mô tả cấu trúc của đối tượng khách sạn
    _id: string;
    userId: string;
    name: string;
    city: string;
    country: string;
    description: string;
    type: string;
    adultCount: number;
    childCount: number;
    facilities: string[];
    pricePerNight: number;
    starRating: number;
    imageUrls: string[];
    lastUpdated: Date;
    bookings: BookingType[];
    dateBooked: DateBookedType[];
    numberOfRoom: number;
}

export type BookingType = {
    _id:string;
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    adultCount: number;
    childCount: number;
    checkIn: Date;
    checkOut: Date;
    totalCost: number;
}

export type HotelSearchResponse = {
    data: HotelType[];
    pagination: {
        total: number;
        page: number;
        pages: number;
    }
}

export type PaymentIntentResponse = {
    paymentIntentId: string;
    clientSecret: string;
    totalCost: number;
}