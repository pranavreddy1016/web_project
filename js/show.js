// 1. Database Array
const tripDatabase = [

    { id: 1, from: "Pune", to: "Mumbai", date: "2026-10-01", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "08:00 PM" },
    { id: 2, from: "Pune", to: "Mumbai", date: "2026-10-01", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "06:15 AM" },
    { id: 3, from: "Pune", to: "Mumbai", date: "2026-10-01", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 4, from: "Pune", to: "Mumbai", date: "2026-10-02", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "08:00 PM" },
    { id: 5, from: "Pune", to: "Mumbai", date: "2026-10-02", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "06:15 AM" },
    { id: 6, from: "Pune", to: "Mumbai", date: "2026-10-02", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 7, from: "Pune", to: "Mumbai", date: "2026-10-03", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "08:00 PM" },
    { id: 8, from: "Pune", to: "Mumbai", date: "2026-10-03", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "06:15 AM" },
    { id: 9, from: "Pune", to: "Mumbai", date: "2026-10-03", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 10, from: "Pune", to: "Mumbai", date: "2026-10-04", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "08:00 PM" },
    { id: 11, from: "Pune", to: "Mumbai", date: "2026-10-04", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "06:15 AM" },
    { id: 12, from: "Pune", to: "Mumbai", date: "2026-10-04", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 13, from: "Pune", to: "Mumbai", date: "2026-10-05", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "08:00 PM" },
    { id: 14, from: "Pune", to: "Mumbai", date: "2026-10-05", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "06:15 AM" },
    { id: 15, from: "Pune", to: "Mumbai", date: "2026-10-05", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 16, from: "Pune", to: "Nashik", date: "2026-10-01", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
    { id: 17, from: "Pune", to: "Nashik", date: "2026-10-01", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 18, from: "Pune", to: "Nashik", date: "2026-10-01", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 19, from: "Pune", to: "Nashik", date: "2026-10-02", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
    { id: 20, from: "Pune", to: "Nashik", date: "2026-10-02", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 21, from: "Pune", to: "Nashik", date: "2026-10-02", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 22, from: "Pune", to: "Nashik", date: "2026-10-03", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
    { id: 23, from: "Pune", to: "Nashik", date: "2026-10-03", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 24, from: "Pune", to: "Nashik", date: "2026-10-03", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 25, from: "Pune", to: "Nashik", date: "2026-10-04", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
    { id: 26, from: "Pune", to: "Nashik", date: "2026-10-04", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 27, from: "Pune", to: "Nashik", date: "2026-10-04", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 28, from: "Pune", to: "Nashik", date: "2026-10-05", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
    { id: 29, from: "Pune", to: "Nashik", date: "2026-10-05", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 30, from: "Pune", to: "Nashik", date: "2026-10-05", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 31, from: "Pune", to: "Delhi", date: "2026-10-01", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 32, from: "Pune", to: "Delhi", date: "2026-10-01", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 33, from: "Pune", to: "Delhi", date: "2026-10-01", price: 4550, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 34, from: "Pune", to: "Delhi", date: "2026-10-02", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 35, from: "Pune", to: "Delhi", date: "2026-10-02", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 36, from: "Pune", to: "Delhi", date: "2026-10-02", price: 4550, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 37, from: "Pune", to: "Delhi", date: "2026-10-03", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 38, from: "Pune", to: "Delhi", date: "2026-10-03", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 39, from: "Pune", to: "Delhi", date: "2026-10-03", price: 4550, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 40, from: "Pune", to: "Delhi", date: "2026-10-04", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 41, from: "Pune", to: "Delhi", date: "2026-10-04", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 42, from: "Pune", to: "Delhi", date: "2026-10-04", price: 4550, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 43, from: "Pune", to: "Delhi", date: "2026-10-05", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 44, from: "Pune", to: "Delhi", date: "2026-10-05", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 45, from: "Pune", to: "Delhi", date: "2026-10-05", price: 4550, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


    { id: 46, from: "Pune", to: "Nanded", date: "2026-10-01", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 47, from: "Pune", to: "Nanded", date: "2026-10-01", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 48, from: "Pune", to: "Nanded", date: "2026-10-01", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 49, from: "Pune", to: "Nanded", date: "2026-10-02", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 50, from: "Pune", to: "Nanded", date: "2026-10-02", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 51, from: "Pune", to: "Nanded", date: "2026-10-02", price: 1250, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 52, from: "Pune", to: "Nanded", date: "2026-10-03", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 53, from: "Pune", to: "Nanded", date: "2026-10-03", price: 1300, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 54, from: "Pune", to: "Nanded", date: "2026-10-03", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 55, from: "Pune", to: "Nanded", date: "2026-10-04", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 56, from: "Pune", to: "Nanded", date: "2026-10-04", price: 1300, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 57, from: "Pune", to: "Nanded", date: "2026-10-04", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 58, from: "Pune", to: "Nanded", date: "2026-10-05", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 59, from: "Pune", to: "Nanded", date: "2026-10-05", price: 1300, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 60, from: "Pune", to: "Nanded", date: "2026-10-05", price: 1250, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 61, from: "Pune", to: "Bengaluru", date: "2026-10-01", price: 2900, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 62, from: "Pune", to: "Bengaluru", date: "2026-10-01", price: 3000, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 63, from: "Pune", to: "Bengaluru", date: "2026-10-01", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 64, from: "Pune", to: "Bengaluru", date: "2026-10-02", price: 2900, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 65, from: "Pune", to: "Bengaluru", date: "2026-10-02", price: 3000, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 66, from: "Pune", to: "Bengaluru", date: "2026-10-02", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 67, from: "Pune", to: "Bengaluru", date: "2026-10-03", price: 2900, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 68, from: "Pune", to: "Bengaluru", date: "2026-10-03", price: 3000, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 69, from: "Pune", to: "Bengaluru", date: "2026-10-03", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 70, from: "Pune", to: "Bengaluru", date: "2026-10-04", price: 2900, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 71, from: "Pune", to: "Bengaluru", date: "2026-10-04", price: 3000, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 72, from: "Pune", to: "Bengaluru", date: "2026-10-04", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 73, from: "Pune", to: "Bengaluru", date: "2026-10-05", price: 2900, bus_name: "Godavari", type: "Sleeper", time: "07:00 PM" },
    { id: 74, from: "Pune", to: "Bengaluru", date: "2026-10-05", price: 3000, bus_name: "Kaveri", type: "Sleeper", time: "08:30 PM" },
    { id: 75, from: "Pune", to: "Bengaluru", date: "2026-10-05", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 76, from: "Pune", to: "Chennai", date: "2026-10-01", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 77, from: "Pune", to: "Chennai", date: "2026-10-01", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 78, from: "Pune", to: "Chennai", date: "2026-10-01", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 79, from: "Pune", to: "Chennai", date: "2026-10-02", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 80, from: "Pune", to: "Chennai", date: "2026-10-02", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 81, from: "Pune", to: "Chennai", date: "2026-10-02", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 82, from: "Pune", to: "Chennai", date: "2026-10-03", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 83, from: "Pune", to: "Chennai", date: "2026-10-03", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 84, from: "Pune", to: "Chennai", date: "2026-10-03", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 85, from: "Pune", to: "Chennai", date: "2026-10-04", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 86, from: "Pune", to: "Chennai", date: "2026-10-04", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 87, from: "Pune", to: "Chennai", date: "2026-10-04", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 88, from: "Pune", to: "Chennai", date: "2026-10-05", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 89, from: "Pune", to: "Chennai", date: "2026-10-05", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 90, from: "Pune", to: "Chennai", date: "2026-10-05", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 91, from: "Nanded", to: "Pune", date: "2026-10-01", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 92, from: "Nanded", to: "Pune", date: "2026-10-01", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 93, from: "Nanded", to: "Pune", date: "2026-10-01", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 94, from: "Nanded", to: "Pune", date: "2026-10-02", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 95, from: "Nanded", to: "Pune", date: "2026-10-02", price: 1250, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 96, from: "Nanded", to: "Pune", date: "2026-10-02", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 97, from: "Nanded", to: "Pune", date: "2026-10-03", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 98, from: "Nanded", to: "Pune", date: "2026-10-03", price: 1250, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 99, from: "Nanded", to: "Pune", date: "2026-10-03", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 100, from: "Nanded", to: "Pune", date: "2026-10-04", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 101, from: "Nanded", to: "Pune", date: "2026-10-04", price: 1250, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 102, from: "Nanded", to: "Pune", date: "2026-10-04", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 103, from: "Nanded", to: "Pune", date: "2026-10-05", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 104, from: "Nanded", to: "Pune", date: "2026-10-05", price: 1250, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 105, from: "Nanded", to: "Pune", date: "2026-10-05", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 106, from: "Nanded", to: "Mumbai", date: "2026-10-01", price: 1400, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 107, from: "Nanded", to: "Mumbai", date: "2026-10-01", price: 1600, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 108, from: "Nanded", to: "Mumbai", date: "2026-10-01", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 109, from: "Nanded", to: "Mumbai", date: "2026-10-02", price: 1400, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 110, from: "Nanded", to: "Mumbai", date: "2026-10-02", price: 1600, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 111, from: "Nanded", to: "Mumbai", date: "2026-10-02", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 112, from: "Nanded", to: "Mumbai", date: "2026-10-03", price: 1400, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 113, from: "Nanded", to: "Mumbai", date: "2026-10-03", price: 1600, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 114, from: "Nanded", to: "Mumbai", date: "2026-10-03", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 115, from: "Nanded", to: "Mumbai", date: "2026-10-04", price: 1400, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 116, from: "Nanded", to: "Mumbai", date: "2026-10-04", price: 1600, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 117, from: "Nanded", to: "Mumbai", date: "2026-10-04", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 118, from: "Nanded", to: "Mumbai", date: "2026-10-05", price: 1400, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 119, from: "Nanded", to: "Mumbai", date: "2026-10-05", price: 1600, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 120, from: "Nanded", to: "Mumbai", date: "2026-10-05", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 121, from: "Nanded", to: "Nashik", date: "2026-10-01", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 122, from: "Nanded", to: "Nashik", date: "2026-10-01", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 123, from: "Nanded", to: "Nashik", date: "2026-10-01", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 124, from: "Nanded", to: "Nashik", date: "2026-10-02", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 125, from: "Nanded", to: "Nashik", date: "2026-10-02", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 126, from: "Nanded", to: "Nashik", date: "2026-10-02", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 127, from: "Nanded", to: "Nashik", date: "2026-10-03", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 128, from: "Nanded", to: "Nashik", date: "2026-10-03", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 129, from: "Nanded", to: "Nashik", date: "2026-10-03", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 130, from: "Nanded", to: "Nashik", date: "2026-10-04", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 131, from: "Nanded", to: "Nashik", date: "2026-10-04", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 132, from: "Nanded", to: "Nashik", date: "2026-10-04", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 133, from: "Nanded", to: "Nashik", date: "2026-10-05", price: 1000, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 134, from: "Nanded", to: "Nashik", date: "2026-10-05", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 135, from: "Nanded", to: "Nashik", date: "2026-10-05", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },


{ id: 136, from: "Nanded", to: "Delhi", date: "2026-10-01", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 137, from: "Nanded", to: "Delhi", date: "2026-10-01", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 138, from: "Nanded", to: "Delhi", date: "2026-10-01", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 139, from: "Nanded", to: "Delhi", date: "2026-10-02", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 140, from: "Nanded", to: "Delhi", date: "2026-10-02", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 141, from: "Nanded", to: "Delhi", date: "2026-10-02", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 142, from: "Nanded", to: "Delhi", date: "2026-10-03", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 143, from: "Nanded", to: "Delhi", date: "2026-10-03", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 144, from: "Nanded", to: "Delhi", date: "2026-10-03", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 145, from: "Nanded", to: "Delhi", date: "2026-10-04", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 146, from: "Nanded", to: "Delhi", date: "2026-10-04", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 147, from: "Nanded", to: "Delhi", date: "2026-10-04", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 148, from: "Nanded", to: "Delhi", date: "2026-10-05", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 149, from: "Nanded", to: "Delhi", date: "2026-10-05", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 150, from: "Nanded", to: "Delhi", date: "2026-10-05", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 151, from: "Nanded", to: "Goa", date: "2026-10-01", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 152, from: "Nanded", to: "Goa", date: "2026-10-01", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 153, from: "Nanded", to: "Goa", date: "2026-10-01", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 154, from: "Nanded", to: "Goa", date: "2026-10-02", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 155, from: "Nanded", to: "Goa", date: "2026-10-02", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 156, from: "Nanded", to: "Goa", date: "2026-10-02", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 157, from: "Nanded", to: "Goa", date: "2026-10-03", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 158, from: "Nanded", to: "Goa", date: "2026-10-03", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 159, from: "Nanded", to: "Goa", date: "2026-10-03", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 160, from: "Nanded", to: "Goa", date: "2026-10-04", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 161, from: "Nanded", to: "Goa", date: "2026-10-04", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 162, from: "Nanded", to: "Goa", date: "2026-10-04", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 163, from: "Nanded", to: "Goa", date: "2026-10-05", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 164, from: "Nanded", to: "Goa", date: "2026-10-05", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 165, from: "Nanded", to: "Goa", date: "2026-10-05", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 166, from: "Nanded", to: "Bengaluru", date: "2026-10-01", price: 2600, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 167, from: "Nanded", to: "Bengaluru", date: "2026-10-01", price: 2900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 168, from: "Nanded", to: "Bengaluru", date: "2026-10-01", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 169, from: "Nanded", to: "Bengaluru", date: "2026-10-02", price: 2600, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 170, from: "Nanded", to: "Bengaluru", date: "2026-10-02", price: 2900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 171, from: "Nanded", to: "Bengaluru", date: "2026-10-02", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 172, from: "Nanded", to: "Bengaluru", date: "2026-10-03", price: 2600, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 173, from: "Nanded", to: "Bengaluru", date: "2026-10-03", price: 2900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 174, from: "Nanded", to: "Bengaluru", date: "2026-10-03", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 175, from: "Nanded", to: "Bengaluru", date: "2026-10-04", price: 2600, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 176, from: "Nanded", to: "Bengaluru", date: "2026-10-04", price: 2900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 177, from: "Nanded", to: "Bengaluru", date: "2026-10-04", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 178, from: "Nanded", to: "Bengaluru", date: "2026-10-05", price: 2600, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 179, from: "Nanded", to: "Bengaluru", date: "2026-10-05", price: 2900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 180, from: "Nanded", to: "Bengaluru", date: "2026-10-05", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


// =====================================================
// NANDED → CHENNAI
// =====================================================

{ id: 181, from: "Nanded", to: "Chennai", date: "2026-10-01", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 182, from: "Nanded", to: "Chennai", date: "2026-10-01", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 183, from: "Nanded", to: "Chennai", date: "2026-10-01", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 184, from: "Nanded", to: "Chennai", date: "2026-10-02", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 185, from: "Nanded", to: "Chennai", date: "2026-10-02", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 186, from: "Nanded", to: "Chennai", date: "2026-10-02", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 187, from: "Nanded", to: "Chennai", date: "2026-10-03", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 188, from: "Nanded", to: "Chennai", date: "2026-10-03", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 189, from: "Nanded", to: "Chennai", date: "2026-10-03", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 190, from: "Nanded", to: "Chennai", date: "2026-10-04", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 191, from: "Nanded", to: "Chennai", date: "2026-10-04", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 192, from: "Nanded", to: "Chennai", date: "2026-10-04", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 193, from: "Nanded", to: "Chennai", date: "2026-10-05", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 194, from: "Nanded", to: "Chennai", date: "2026-10-05", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 195, from: "Nanded", to: "Chennai", date: "2026-10-05", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


// =====================================================
// NANDED → HYDERABAD
// =====================================================

{ id: 196, from: "Nanded", to: "Hyderabad", date: "2026-10-01", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 197, from: "Nanded", to: "Hyderabad", date: "2026-10-01", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 198, from: "Nanded", to: "Hyderabad", date: "2026-10-01", price: 1600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 199, from: "Nanded", to: "Hyderabad", date: "2026-10-02", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 200, from: "Nanded", to: "Hyderabad", date: "2026-10-02", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 201, from: "Nanded", to: "Hyderabad", date: "2026-10-02", price: 1600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 202, from: "Nanded", to: "Hyderabad", date: "2026-10-03", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 203, from: "Nanded", to: "Hyderabad", date: "2026-10-03", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 204, from: "Nanded", to: "Hyderabad", date: "2026-10-03", price: 1600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 205, from: "Nanded", to: "Hyderabad", date: "2026-10-04", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 206, from: "Nanded", to: "Hyderabad", date: "2026-10-04", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 207, from: "Nanded", to: "Hyderabad", date: "2026-10-04", price: 1600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 208, from: "Nanded", to: "Hyderabad", date: "2026-10-05", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 209, from: "Nanded", to: "Hyderabad", date: "2026-10-05", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 210, from: "Nanded", to: "Hyderabad", date: "2026-10-05", price: 1600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


// =====================================================
// NANDED → NAGPUR
// =====================================================

{ id: 211, from: "Nanded", to: "Nagpur", date: "2026-10-01", price: 1300, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 212, from: "Nanded", to: "Nagpur", date: "2026-10-01", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 213, from: "Nanded", to: "Nagpur", date: "2026-10-01", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 214, from: "Nanded", to: "Nagpur", date: "2026-10-02", price: 1300, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 215, from: "Nanded", to: "Nagpur", date: "2026-10-02", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 216, from: "Nanded", to: "Nagpur", date: "2026-10-02", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 217, from: "Nanded", to: "Nagpur", date: "2026-10-03", price: 1300, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 218, from: "Nanded", to: "Nagpur", date: "2026-10-03", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 219, from: "Nanded", to: "Nagpur", date: "2026-10-03", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 220, from: "Nanded", to: "Nagpur", date: "2026-10-04", price: 1300, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 221, from: "Nanded", to: "Nagpur", date: "2026-10-04", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 222, from: "Nanded", to: "Nagpur", date: "2026-10-04", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 223, from: "Nanded", to: "Nagpur", date: "2026-10-05", price: 1300, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 224, from: "Nanded", to: "Nagpur", date: "2026-10-05", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 225, from: "Nanded", to: "Nagpur", date: "2026-10-05", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },


// =====================================================
// NANDED → AURANGABAD
// =====================================================

{ id: 226, from: "Nanded", to: "Aurangabad", date: "2026-10-01", price: 900, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 227, from: "Nanded", to: "Aurangabad", date: "2026-10-01", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 228, from: "Nanded", to: "Aurangabad", date: "2026-10-01", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 229, from: "Nanded", to: "Aurangabad", date: "2026-10-02", price: 900, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 230, from: "Nanded", to: "Aurangabad", date: "2026-10-02", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 231, from: "Nanded", to: "Aurangabad", date: "2026-10-02", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 232, from: "Nanded", to: "Aurangabad", date: "2026-10-03", price: 900, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 233, from: "Nanded", to: "Aurangabad", date: "2026-10-03", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 234, from: "Nanded", to: "Aurangabad", date: "2026-10-03", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 235, from: "Nanded", to: "Aurangabad", date: "2026-10-04", price: 900, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 236, from: "Nanded", to: "Aurangabad", date: "2026-10-04", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 237, from: "Nanded", to: "Aurangabad", date: "2026-10-04", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

{ id: 238, from: "Nanded", to: "Aurangabad", date: "2026-10-05", price: 900, bus_name: "Godavari", type: "Sleeper", time: "07:00 AM" },
{ id: 239, from: "Nanded", to: "Aurangabad", date: "2026-10-05", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
{ id: 240, from: "Nanded", to: "Aurangabad", date: "2026-10-05", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },


// =====================================================
// NANDED → KOLHAPUR
// =====================================================

{ id: 241, from: "Nanded", to: "Kolhapur", date: "2026-10-01", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 242, from: "Nanded", to: "Kolhapur", date: "2026-10-01", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 243, from: "Nanded", to: "Kolhapur", date: "2026-10-01", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 244, from: "Nanded", to: "Kolhapur", date: "2026-10-02", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 245, from: "Nanded", to: "Kolhapur", date: "2026-10-02", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 246, from: "Nanded", to: "Kolhapur", date: "2026-10-02", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 247, from: "Nanded", to: "Kolhapur", date: "2026-10-03", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 248, from: "Nanded", to: "Kolhapur", date: "2026-10-03", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 249, from: "Nanded", to: "Kolhapur", date: "2026-10-03", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 250, from: "Nanded", to: "Kolhapur", date: "2026-10-04", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 251, from: "Nanded", to: "Kolhapur", date: "2026-10-04", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 252, from: "Nanded", to: "Kolhapur", date: "2026-10-04", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 253, from: "Nanded", to: "Kolhapur", date: "2026-10-05", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 254, from: "Nanded", to: "Kolhapur", date: "2026-10-05", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 255, from: "Nanded", to: "Kolhapur", date: "2026-10-05", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


// =====================================================
// NANDED → SURAT
// =====================================================

{ id: 256, from: "Nanded", to: "Surat", date: "2026-10-01", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 257, from: "Nanded", to: "Surat", date: "2026-10-01", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 258, from: "Nanded", to: "Surat", date: "2026-10-01", price: 2300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 259, from: "Nanded", to: "Surat", date: "2026-10-02", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 260, from: "Nanded", to: "Surat", date: "2026-10-02", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 261, from: "Nanded", to: "Surat", date: "2026-10-02", price: 2300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 262, from: "Nanded", to: "Surat", date: "2026-10-03", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 263, from: "Nanded", to: "Surat", date: "2026-10-03", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 264, from: "Nanded", to: "Surat", date: "2026-10-03", price: 2300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 265, from: "Nanded", to: "Surat", date: "2026-10-04", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 266, from: "Nanded", to: "Surat", date: "2026-10-04", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 267, from: "Nanded", to: "Surat", date: "2026-10-04", price: 2300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 268, from: "Nanded", to: "Surat", date: "2026-10-05", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 269, from: "Nanded", to: "Surat", date: "2026-10-05", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 270, from: "Nanded", to: "Surat", date: "2026-10-05", price: 2300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },



{ id: 271, from: "Nanded", to: "Ahmedabad", date: "2026-10-01", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 272, from: "Nanded", to: "Ahmedabad", date: "2026-10-01", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 273, from: "Nanded", to: "Ahmedabad", date: "2026-10-01", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 274, from: "Nanded", to: "Ahmedabad", date: "2026-10-02", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 275, from: "Nanded", to: "Ahmedabad", date: "2026-10-02", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 276, from: "Nanded", to: "Ahmedabad", date: "2026-10-02", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 277, from: "Nanded", to: "Ahmedabad", date: "2026-10-03", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 278, from: "Nanded", to: "Ahmedabad", date: "2026-10-03", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 279, from: "Nanded", to: "Ahmedabad", date: "2026-10-03", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 280, from: "Nanded", to: "Ahmedabad", date: "2026-10-04", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 281, from: "Nanded", to: "Ahmedabad", date: "2026-10-04", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 282, from: "Nanded", to: "Ahmedabad", date: "2026-10-04", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 283, from: "Nanded", to: "Ahmedabad", date: "2026-10-05", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 284, from: "Nanded", to: "Ahmedabad", date: "2026-10-05", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 285, from: "Nanded", to: "Ahmedabad", date: "2026-10-05", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },



    { id: 106, from: "Mumbai", to: "Nanded", date: "2026-10-01", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 107, from: "Mumbai", to: "Nanded", date: "2026-10-01", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 108, from: "Mumbai", to: "Nanded", date: "2026-10-01", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 109, from: "Mumbai", to: "Nanded", date: "2026-10-02", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 110, from: "Mumbai", to: "Nanded", date: "2026-10-02", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 111, from: "Mumbai", to: "Nanded", date: "2026-10-02", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 112, from: "Mumbai", to: "Nanded", date: "2026-10-03", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 113, from: "Mumbai", to: "Nanded", date: "2026-10-03", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 114, from: "Mumbai", to: "Nanded", date: "2026-10-03", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 115, from: "Mumbai", to: "Nanded", date: "2026-10-04", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 116, from: "Mumbai", to: "Nanded", date: "2026-10-04", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 117, from: "Mumbai", to: "Nanded", date: "2026-10-04", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 118, from: "Mumbai", to: "Nanded", date: "2026-10-05", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 119, from: "Mumbai", to: "Nanded", date: "2026-10-05", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 120, from: "Mumbai", to: "Nanded", date: "2026-10-05", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 121, from: "Mumbai", to: "Pune", date: "2026-10-01", price: 500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 122, from: "Mumbai", to: "Pune", date: "2026-10-01", price: 700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 123, from: "Mumbai", to: "Pune", date: "2026-10-01", price: 900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 124, from: "Mumbai", to: "Pune", date: "2026-10-02", price: 500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 125, from: "Mumbai", to: "Pune", date: "2026-10-02", price: 700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 126, from: "Mumbai", to: "Pune", date: "2026-10-02", price: 900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 127, from: "Mumbai", to: "Pune", date: "2026-10-03", price: 500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 128, from: "Mumbai", to: "Pune", date: "2026-10-03", price: 700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 129, from: "Mumbai", to: "Pune", date: "2026-10-03", price: 900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 130, from: "Mumbai", to: "Pune", date: "2026-10-04", price: 500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 131, from: "Mumbai", to: "Pune", date: "2026-10-04", price: 700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 132, from: "Mumbai", to: "Pune", date: "2026-10-04", price: 900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 133, from: "Mumbai", to: "Pune", date: "2026-10-05", price: 500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 134, from: "Mumbai", to: "Pune", date: "2026-10-05", price: 700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 135, from: "Mumbai", to: "Pune", date: "2026-10-05", price: 900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


    

    { id: 136, from: "Mumbai", to: "Nashik", date: "2026-10-01", price: 600, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 137, from: "Mumbai", to: "Nashik", date: "2026-10-01", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 138, from: "Mumbai", to: "Nashik", date: "2026-10-01", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 139, from: "Mumbai", to: "Nashik", date: "2026-10-02", price: 600, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 140, from: "Mumbai", to: "Nashik", date: "2026-10-02", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 141, from: "Mumbai", to: "Nashik", date: "2026-10-02", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 142, from: "Mumbai", to: "Nashik", date: "2026-10-03", price: 600, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 143, from: "Mumbai", to: "Nashik", date: "2026-10-03", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 144, from: "Mumbai", to: "Nashik", date: "2026-10-03", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 145, from: "Mumbai", to: "Nashik", date: "2026-10-04", price: 600, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 146, from: "Mumbai", to: "Nashik", date: "2026-10-04", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 147, from: "Mumbai", to: "Nashik", date: "2026-10-04", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 148, from: "Mumbai", to: "Nashik", date: "2026-10-05", price: 600, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 149, from: "Mumbai", to: "Nashik", date: "2026-10-05", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 150, from: "Mumbai", to: "Nashik", date: "2026-10-05", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },



    { id: 151, from: "Mumbai", to: "Delhi", date: "2026-10-01", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 152, from: "Mumbai", to: "Delhi", date: "2026-10-01", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 153, from: "Mumbai", to: "Delhi", date: "2026-10-01", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 154, from: "Mumbai", to: "Delhi", date: "2026-10-02", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 155, from: "Mumbai", to: "Delhi", date: "2026-10-02", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 156, from: "Mumbai", to: "Delhi", date: "2026-10-02", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 157, from: "Mumbai", to: "Delhi", date: "2026-10-03", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 158, from: "Mumbai", to: "Delhi", date: "2026-10-03", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 159, from: "Mumbai", to: "Delhi", date: "2026-10-03", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 160, from: "Mumbai", to: "Delhi", date: "2026-10-04", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 161, from: "Mumbai", to: "Delhi", date: "2026-10-04", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 162, from: "Mumbai", to: "Delhi", date: "2026-10-04", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 163, from: "Mumbai", to: "Delhi", date: "2026-10-05", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 164, from: "Mumbai", to: "Delhi", date: "2026-10-05", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 165, from: "Mumbai", to: "Delhi", date: "2026-10-05", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


    { id: 166, from: "Mumbai", to: "Goa", date: "2026-10-01", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 167, from: "Mumbai", to: "Goa", date: "2026-10-01", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 168, from: "Mumbai", to: "Goa", date: "2026-10-01", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 169, from: "Mumbai", to: "Goa", date: "2026-10-02", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 170, from: "Mumbai", to: "Goa", date: "2026-10-02", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 171, from: "Mumbai", to: "Goa", date: "2026-10-02", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 172, from: "Mumbai", to: "Goa", date: "2026-10-03", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 173, from: "Mumbai", to: "Goa", date: "2026-10-03", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 174, from: "Mumbai", to: "Goa", date: "2026-10-03", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 175, from: "Mumbai", to: "Goa", date: "2026-10-04", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 176, from: "Mumbai", to: "Goa", date: "2026-10-04", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 177, from: "Mumbai", to: "Goa", date: "2026-10-04", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 178, from: "Mumbai", to: "Goa", date: "2026-10-05", price: 1200, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
    { id: 179, from: "Mumbai", to: "Goa", date: "2026-10-05", price: 1500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 180, from: "Mumbai", to: "Goa", date: "2026-10-05", price: 1800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 181, from: "Mumbai", to: "Bengaluru", date: "2026-10-01", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 182, from: "Mumbai", to: "Bengaluru", date: "2026-10-01", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 183, from: "Mumbai", to: "Bengaluru", date: "2026-10-01", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 184, from: "Mumbai", to: "Bengaluru", date: "2026-10-02", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 185, from: "Mumbai", to: "Bengaluru", date: "2026-10-02", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 186, from: "Mumbai", to: "Bengaluru", date: "2026-10-02", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 187, from: "Mumbai", to: "Bengaluru", date: "2026-10-03", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 188, from: "Mumbai", to: "Bengaluru", date: "2026-10-03", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 189, from: "Mumbai", to: "Bengaluru", date: "2026-10-03", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 190, from: "Mumbai", to: "Bengaluru", date: "2026-10-04", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 191, from: "Mumbai", to: "Bengaluru", date: "2026-10-04", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 192, from: "Mumbai", to: "Bengaluru", date: "2026-10-04", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 193, from: "Mumbai", to: "Bengaluru", date: "2026-10-05", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 194, from: "Mumbai", to: "Bengaluru", date: "2026-10-05", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 195, from: "Mumbai", to: "Bengaluru", date: "2026-10-05", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


    

    { id: 196, from: "Mumbai", to: "Chennai", date: "2026-10-01", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 197, from: "Mumbai", to: "Chennai", date: "2026-10-01", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 198, from: "Mumbai", to: "Chennai", date: "2026-10-01", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 199, from: "Mumbai", to: "Chennai", date: "2026-10-02", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 200, from: "Mumbai", to: "Chennai", date: "2026-10-02", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 201, from: "Mumbai", to: "Chennai", date: "2026-10-02", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 202, from: "Mumbai", to: "Chennai", date: "2026-10-03", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 203, from: "Mumbai", to: "Chennai", date: "2026-10-03", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 204, from: "Mumbai", to: "Chennai", date: "2026-10-03", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 205, from: "Mumbai", to: "Chennai", date: "2026-10-04", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 206, from: "Mumbai", to: "Chennai", date: "2026-10-04", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 207, from: "Mumbai", to: "Chennai", date: "2026-10-04", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 208, from: "Mumbai", to: "Chennai", date: "2026-10-05", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 209, from: "Mumbai", to: "Chennai", date: "2026-10-05", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 210, from: "Mumbai", to: "Chennai", date: "2026-10-05", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },



    { id: 211, from: "Mumbai", to: "Hyderabad", date: "2026-10-01", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 212, from: "Mumbai", to: "Hyderabad", date: "2026-10-01", price: 1800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 213, from: "Mumbai", to: "Hyderabad", date: "2026-10-01", price: 2100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 214, from: "Mumbai", to: "Hyderabad", date: "2026-10-02", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 215, from: "Mumbai", to: "Hyderabad", date: "2026-10-02", price: 1800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 216, from: "Mumbai", to: "Hyderabad", date: "2026-10-02", price: 2100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 217, from: "Mumbai", to: "Hyderabad", date: "2026-10-03", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 218, from: "Mumbai", to: "Hyderabad", date: "2026-10-03", price: 1800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 219, from: "Mumbai", to: "Hyderabad", date: "2026-10-03", price: 2100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 220, from: "Mumbai", to: "Hyderabad", date: "2026-10-04", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 221, from: "Mumbai", to: "Hyderabad", date: "2026-10-04", price: 1800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 222, from: "Mumbai", to: "Hyderabad", date: "2026-10-04", price: 2100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 223, from: "Mumbai", to: "Hyderabad", date: "2026-10-05", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 224, from: "Mumbai", to: "Hyderabad", date: "2026-10-05", price: 1800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 225, from: "Mumbai", to: "Hyderabad", date: "2026-10-05", price: 2100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },



    { id: 226, from: "Mumbai", to: "Nagpur", date: "2026-10-01", price: 1100, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 227, from: "Mumbai", to: "Nagpur", date: "2026-10-01", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 228, from: "Mumbai", to: "Nagpur", date: "2026-10-01", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 229, from: "Mumbai", to: "Nagpur", date: "2026-10-02", price: 1100, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 230, from: "Mumbai", to: "Nagpur", date: "2026-10-02", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 231, from: "Mumbai", to: "Nagpur", date: "2026-10-02", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 232, from: "Mumbai", to: "Nagpur", date: "2026-10-03", price: 1100, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 233, from: "Mumbai", to: "Nagpur", date: "2026-10-03", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 234, from: "Mumbai", to: "Nagpur", date: "2026-10-03", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 235, from: "Mumbai", to: "Nagpur", date: "2026-10-04", price: 1100, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 236, from: "Mumbai", to: "Nagpur", date: "2026-10-04", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 237, from: "Mumbai", to: "Nagpur", date: "2026-10-04", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 238, from: "Mumbai", to: "Nagpur", date: "2026-10-05", price: 1100, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 239, from: "Mumbai", to: "Nagpur", date: "2026-10-05", price: 1400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 240, from: "Mumbai", to: "Nagpur", date: "2026-10-05", price: 1700, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


    { id: 241, from: "Mumbai", to: "Aurangabad", date: "2026-10-01", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 242, from: "Mumbai", to: "Aurangabad", date: "2026-10-01", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 243, from: "Mumbai", to: "Aurangabad", date: "2026-10-01", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 244, from: "Mumbai", to: "Aurangabad", date: "2026-10-02", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 245, from: "Mumbai", to: "Aurangabad", date: "2026-10-02", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 246, from: "Mumbai", to: "Aurangabad", date: "2026-10-02", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 247, from: "Mumbai", to: "Aurangabad", date: "2026-10-03", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 248, from: "Mumbai", to: "Aurangabad", date: "2026-10-03", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 249, from: "Mumbai", to: "Aurangabad", date: "2026-10-03", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 250, from: "Mumbai", to: "Aurangabad", date: "2026-10-04", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 251, from: "Mumbai", to: "Aurangabad", date: "2026-10-04", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 252, from: "Mumbai", to: "Aurangabad", date: "2026-10-04", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },

    { id: 253, from: "Mumbai", to: "Aurangabad", date: "2026-10-05", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 AM" },
    { id: 254, from: "Mumbai", to: "Aurangabad", date: "2026-10-05", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "02:00 PM" },
    { id: 255, from: "Mumbai", to: "Aurangabad", date: "2026-10-05", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "09:00 PM" },



    { id: 256, from: "Mumbai", to: "Kolhapur", date: "2026-10-01", price: 800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 257, from: "Mumbai", to: "Kolhapur", date: "2026-10-01", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 258, from: "Mumbai", to: "Kolhapur", date: "2026-10-01", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 259, from: "Mumbai", to: "Kolhapur", date: "2026-10-02", price: 800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 260, from: "Mumbai", to: "Kolhapur", date: "2026-10-02", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 261, from: "Mumbai", to: "Kolhapur", date: "2026-10-02", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 262, from: "Mumbai", to: "Kolhapur", date: "2026-10-03", price: 800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 263, from: "Mumbai", to: "Kolhapur", date: "2026-10-03", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 264, from: "Mumbai", to: "Kolhapur", date: "2026-10-03", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 265, from: "Mumbai", to: "Kolhapur", date: "2026-10-04", price: 800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 266, from: "Mumbai", to: "Kolhapur", date: "2026-10-04", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 267, from: "Mumbai", to: "Kolhapur", date: "2026-10-04", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 268, from: "Mumbai", to: "Kolhapur", date: "2026-10-05", price: 800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 269, from: "Mumbai", to: "Kolhapur", date: "2026-10-05", price: 1100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 270, from: "Mumbai", to: "Kolhapur", date: "2026-10-05", price: 1400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


  
    { id: 271, from: "Mumbai", to: "Surat", date: "2026-10-01", price: 700, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 272, from: "Mumbai", to: "Surat", date: "2026-10-01", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 273, from: "Mumbai", to: "Surat", date: "2026-10-01", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 274, from: "Mumbai", to: "Surat", date: "2026-10-02", price: 700, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 275, from: "Mumbai", to: "Surat", date: "2026-10-02", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 276, from: "Mumbai", to: "Surat", date: "2026-10-02", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 277, from: "Mumbai", to: "Surat", date: "2026-10-03", price: 700, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 278, from: "Mumbai", to: "Surat", date: "2026-10-03", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 279, from: "Mumbai", to: "Surat", date: "2026-10-03", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 280, from: "Mumbai", to: "Surat", date: "2026-10-04", price: 700, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 281, from: "Mumbai", to: "Surat", date: "2026-10-04", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 282, from: "Mumbai", to: "Surat", date: "2026-10-04", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 283, from: "Mumbai", to: "Surat", date: "2026-10-05", price: 700, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 284, from: "Mumbai", to: "Surat", date: "2026-10-05", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 285, from: "Mumbai", to: "Surat", date: "2026-10-05", price: 1300, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 286, from: "Mumbai", to: "Ahmedabad", date: "2026-10-01", price: 900, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 287, from: "Mumbai", to: "Ahmedabad", date: "2026-10-01", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 288, from: "Mumbai", to: "Ahmedabad", date: "2026-10-01", price: 1500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 289, from: "Mumbai", to: "Ahmedabad", date: "2026-10-02", price: 900, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 290, from: "Mumbai", to: "Ahmedabad", date: "2026-10-02", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 291, from: "Mumbai", to: "Ahmedabad", date: "2026-10-02", price: 1500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 292, from: "Mumbai", to: "Ahmedabad", date: "2026-10-03", price: 900, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 293, from: "Mumbai", to: "Ahmedabad", date: "2026-10-03", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 294, from: "Mumbai", to: "Ahmedabad", date: "2026-10-03", price: 1500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 295, from: "Mumbai", to: "Ahmedabad", date: "2026-10-04", price: 900, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 296, from: "Mumbai", to: "Ahmedabad", date: "2026-10-04", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 297, from: "Mumbai", to: "Ahmedabad", date: "2026-10-04", price: 1500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    { id: 298, from: "Mumbai", to: "Ahmedabad", date: "2026-10-05", price: 900, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
    { id: 299, from: "Mumbai", to: "Ahmedabad", date: "2026-10-05", price: 1200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
    { id: 300, from: "Mumbai", to: "Ahmedabad", date: "2026-10-05", price: 1500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

    
// NASHIK all routes 

{ id: 301, from: "Nashik", to: "Pune", date: "2026-10-01", price: 800, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 302, from: "Nashik", to: "Pune", date: "2026-10-01", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 303, from: "Nashik", to: "Pune", date: "2026-10-01", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 304, from: "Nashik", to: "Pune", date: "2026-10-02", price: 800, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 305, from: "Nashik", to: "Pune", date: "2026-10-02", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 306, from: "Nashik", to: "Pune", date: "2026-10-02", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 307, from: "Nashik", to: "Pune", date: "2026-10-03", price: 800, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 308, from: "Nashik", to: "Pune", date: "2026-10-03", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 309, from: "Nashik", to: "Pune", date: "2026-10-03", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 310, from: "Nashik", to: "Pune", date: "2026-10-04", price: 800, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 311, from: "Nashik", to: "Pune", date: "2026-10-04", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 312, from: "Nashik", to: "Pune", date: "2026-10-04", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 313, from: "Nashik", to: "Pune", date: "2026-10-05", price: 800, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 314, from: "Nashik", to: "Pune", date: "2026-10-05", price: 1000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 315, from: "Nashik", to: "Pune", date: "2026-10-05", price: 1200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 316, from: "Nashik", to: "Mumbai", date: "2026-10-01", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 317, from: "Nashik", to: "Mumbai", date: "2026-10-01", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 318, from: "Nashik", to: "Mumbai", date: "2026-10-01", price: 1100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 319, from: "Nashik", to: "Mumbai", date: "2026-10-02", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 320, from: "Nashik", to: "Mumbai", date: "2026-10-02", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 321, from: "Nashik", to: "Mumbai", date: "2026-10-02", price: 1100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 322, from: "Nashik", to: "Mumbai", date: "2026-10-03", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 323, from: "Nashik", to: "Mumbai", date: "2026-10-03", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 324, from: "Nashik", to: "Mumbai", date: "2026-10-03", price: 1100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 325, from: "Nashik", to: "Mumbai", date: "2026-10-04", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 326, from: "Nashik", to: "Mumbai", date: "2026-10-04", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 327, from: "Nashik", to: "Mumbai", date: "2026-10-04", price: 1100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 328, from: "Nashik", to: "Mumbai", date: "2026-10-05", price: 700, bus_name: "Godavari", type: "Sleeper", time: "06:00 PM" },
{ id: 329, from: "Nashik", to: "Mumbai", date: "2026-10-05", price: 900, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 330, from: "Nashik", to: "Mumbai", date: "2026-10-05", price: 1100, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 331, from: "Nashik", to: "Delhi", date: "2026-10-01", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 332, from: "Nashik", to: "Delhi", date: "2026-10-01", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 333, from: "Nashik", to: "Delhi", date: "2026-10-01", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 334, from: "Nashik", to: "Delhi", date: "2026-10-02", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 335, from: "Nashik", to: "Delhi", date: "2026-10-02", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 336, from: "Nashik", to: "Delhi", date: "2026-10-02", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 337, from: "Nashik", to: "Delhi", date: "2026-10-03", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 338, from: "Nashik", to: "Delhi", date: "2026-10-03", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 339, from: "Nashik", to: "Delhi", date: "2026-10-03", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 340, from: "Nashik", to: "Delhi", date: "2026-10-04", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 341, from: "Nashik", to: "Delhi", date: "2026-10-04", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 342, from: "Nashik", to: "Delhi", date: "2026-10-04", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 343, from: "Nashik", to: "Delhi", date: "2026-10-05", price: 4000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 344, from: "Nashik", to: "Delhi", date: "2026-10-05", price: 4500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 345, from: "Nashik", to: "Delhi", date: "2026-10-05", price: 5000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 346, from: "Nashik", to: "Nanded", date: "2026-10-01", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 347, from: "Nashik", to: "Nanded", date: "2026-10-01", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 348, from: "Nashik", to: "Nanded", date: "2026-10-01", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 349, from: "Nashik", to: "Nanded", date: "2026-10-02", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 350, from: "Nashik", to: "Nanded", date: "2026-10-02", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 351, from: "Nashik", to: "Nanded", date: "2026-10-02", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 352, from: "Nashik", to: "Nanded", date: "2026-10-03", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 353, from: "Nashik", to: "Nanded", date: "2026-10-03", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 354, from: "Nashik", to: "Nanded", date: "2026-10-03", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 355, from: "Nashik", to: "Nanded", date: "2026-10-04", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 356, from: "Nashik", to: "Nanded", date: "2026-10-04", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 357, from: "Nashik", to: "Nanded", date: "2026-10-04", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 358, from: "Nashik", to: "Nanded", date: "2026-10-05", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 359, from: "Nashik", to: "Nanded", date: "2026-10-05", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 360, from: "Nashik", to: "Nanded", date: "2026-10-05", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },
  

{ id: 361, from: "Nashik", to: "Bengaluru", date: "2026-10-01", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 362, from: "Nashik", to: "Bengaluru", date: "2026-10-01", price: 3800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 363, from: "Nashik", to: "Bengaluru", date: "2026-10-01", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 364, from: "Nashik", to: "Bengaluru", date: "2026-10-02", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 365, from: "Nashik", to: "Bengaluru", date: "2026-10-02", price: 3800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 366, from: "Nashik", to: "Bengaluru", date: "2026-10-02", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 367, from: "Nashik", to: "Bengaluru", date: "2026-10-03", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 368, from: "Nashik", to: "Bengaluru", date: "2026-10-03", price: 3800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 369, from: "Nashik", to: "Bengaluru", date: "2026-10-03", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 370, from: "Nashik", to: "Bengaluru", date: "2026-10-04", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 371, from: "Nashik", to: "Bengaluru", date: "2026-10-04", price: 3800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 372, from: "Nashik", to: "Bengaluru", date: "2026-10-04", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 373, from: "Nashik", to: "Bengaluru", date: "2026-10-05", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 374, from: "Nashik", to: "Bengaluru", date: "2026-10-05", price: 3800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 375, from: "Nashik", to: "Bengaluru", date: "2026-10-05", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 376, from: "Nashik", to: "Chennai", date: "2026-10-01", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 377, from: "Nashik", to: "Chennai", date: "2026-10-01", price: 4800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 378, from: "Nashik", to: "Chennai", date: "2026-10-01", price: 5200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 379, from: "Nashik", to: "Chennai", date: "2026-10-02", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 380, from: "Nashik", to: "Chennai", date: "2026-10-02", price: 4800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 381, from: "Nashik", to: "Chennai", date: "2026-10-02", price: 5200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 382, from: "Nashik", to: "Chennai", date: "2026-10-03", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 383, from: "Nashik", to: "Chennai", date: "2026-10-03", price: 4800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 384, from: "Nashik", to: "Chennai", date: "2026-10-03", price: 5200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 385, from: "Nashik", to: "Chennai", date: "2026-10-04", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 386, from: "Nashik", to: "Chennai", date: "2026-10-04", price: 4800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 387, from: "Nashik", to: "Chennai", date: "2026-10-04", price: 5200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 388, from: "Nashik", to: "Chennai", date: "2026-10-05", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 389, from: "Nashik", to: "Chennai", date: "2026-10-05", price: 4800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 390, from: "Nashik", to: "Chennai", date: "2026-10-05", price: 5200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 391, from: "Nashik", to: "Ahmedabad", date: "2026-10-01", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 392, from: "Nashik", to: "Ahmedabad", date: "2026-10-01", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 393, from: "Nashik", to: "Ahmedabad", date: "2026-10-01", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 394, from: "Nashik", to: "Ahmedabad", date: "2026-10-02", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 395, from: "Nashik", to: "Ahmedabad", date: "2026-10-02", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 396, from: "Nashik", to: "Ahmedabad", date: "2026-10-02", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 397, from: "Nashik", to: "Ahmedabad", date: "2026-10-03", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 398, from: "Nashik", to: "Ahmedabad", date: "2026-10-03", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 399, from: "Nashik", to: "Ahmedabad", date: "2026-10-03", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 400, from: "Nashik", to: "Ahmedabad", date: "2026-10-04", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 401, from: "Nashik", to: "Ahmedabad", date: "2026-10-04", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 402, from: "Nashik", to: "Ahmedabad", date: "2026-10-04", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 403, from: "Nashik", to: "Ahmedabad", date: "2026-10-05", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 404, from: "Nashik", to: "Ahmedabad", date: "2026-10-05", price: 2100, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 405, from: "Nashik", to: "Ahmedabad", date: "2026-10-05", price: 2400, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 301, from: "Delhi", to: "Pune", date: "2026-10-01", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 302, from: "Delhi", to: "Pune", date: "2026-10-01", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 303, from: "Delhi", to: "Pune", date: "2026-10-01", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 304, from: "Delhi", to: "Pune", date: "2026-10-02", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 305, from: "Delhi", to: "Pune", date: "2026-10-02", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 306, from: "Delhi", to: "Pune", date: "2026-10-02", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 307, from: "Delhi", to: "Pune", date: "2026-10-03", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 308, from: "Delhi", to: "Pune", date: "2026-10-03", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 309, from: "Delhi", to: "Pune", date: "2026-10-03", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 310, from: "Delhi", to: "Pune", date: "2026-10-04", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 311, from: "Delhi", to: "Pune", date: "2026-10-04", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 312, from: "Delhi", to: "Pune", date: "2026-10-04", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 313, from: "Delhi", to: "Pune", date: "2026-10-05", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 314, from: "Delhi", to: "Pune", date: "2026-10-05", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 315, from: "Delhi", to: "Pune", date: "2026-10-05", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 316, from: "Delhi", to: "Mumbai", date: "2026-10-01", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 317, from: "Delhi", to: "Mumbai", date: "2026-10-01", price: 3500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 318, from: "Delhi", to: "Mumbai", date: "2026-10-01", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 319, from: "Delhi", to: "Mumbai", date: "2026-10-02", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 320, from: "Delhi", to: "Mumbai", date: "2026-10-02", price: 3500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 321, from: "Delhi", to: "Mumbai", date: "2026-10-02", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 322, from: "Delhi", to: "Mumbai", date: "2026-10-03", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 323, from: "Delhi", to: "Mumbai", date: "2026-10-03", price: 3500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 324, from: "Delhi", to: "Mumbai", date: "2026-10-03", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 325, from: "Delhi", to: "Mumbai", date: "2026-10-04", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 326, from: "Delhi", to: "Mumbai", date: "2026-10-04", price: 3500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 327, from: "Delhi", to: "Mumbai", date: "2026-10-04", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 328, from: "Delhi", to: "Mumbai", date: "2026-10-05", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 329, from: "Delhi", to: "Mumbai", date: "2026-10-05", price: 3500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 330, from: "Delhi", to: "Mumbai", date: "2026-10-05", price: 4000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 331, from: "Delhi", to: "Nashik", date: "2026-10-01", price: 2800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 332, from: "Delhi", to: "Nashik", date: "2026-10-01", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 333, from: "Delhi", to: "Nashik", date: "2026-10-01", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 334, from: "Delhi", to: "Nashik", date: "2026-10-02", price: 2800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 335, from: "Delhi", to: "Nashik", date: "2026-10-02", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 336, from: "Delhi", to: "Nashik", date: "2026-10-02", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 337, from: "Delhi", to: "Nashik", date: "2026-10-03", price: 2800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 338, from: "Delhi", to: "Nashik", date: "2026-10-03", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 339, from: "Delhi", to: "Nashik", date: "2026-10-03", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 340, from: "Delhi", to: "Nashik", date: "2026-10-04", price: 2800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 341, from: "Delhi", to: "Nashik", date: "2026-10-04", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 342, from: "Delhi", to: "Nashik", date: "2026-10-04", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 343, from: "Delhi", to: "Nashik", date: "2026-10-05", price: 2800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 344, from: "Delhi", to: "Nashik", date: "2026-10-05", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 345, from: "Delhi", to: "Nashik", date: "2026-10-05", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 346, from: "Delhi", to: "Nanded", date: "2026-10-01", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 347, from: "Delhi", to: "Nanded", date: "2026-10-01", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 348, from: "Delhi", to: "Nanded", date: "2026-10-01", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 349, from: "Delhi", to: "Nanded", date: "2026-10-02", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 350, from: "Delhi", to: "Nanded", date: "2026-10-02", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 351, from: "Delhi", to: "Nanded", date: "2026-10-02", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 352, from: "Delhi", to: "Nanded", date: "2026-10-03", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 353, from: "Delhi", to: "Nanded", date: "2026-10-03", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 354, from: "Delhi", to: "Nanded", date: "2026-10-03", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 355, from: "Delhi", to: "Nanded", date: "2026-10-04", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 356, from: "Delhi", to: "Nanded", date: "2026-10-04", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 357, from: "Delhi", to: "Nanded", date: "2026-10-04", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 358, from: "Delhi", to: "Nanded", date: "2026-10-05", price: 3500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 359, from: "Delhi", to: "Nanded", date: "2026-10-05", price: 4000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 360, from: "Delhi", to: "Nanded", date: "2026-10-05", price: 4500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 361, from: "Delhi", to: "Bengaluru", date: "2026-10-01", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 362, from: "Delhi", to: "Bengaluru", date: "2026-10-01", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 363, from: "Delhi", to: "Bengaluru", date: "2026-10-01", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 364, from: "Delhi", to: "Bengaluru", date: "2026-10-02", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 365, from: "Delhi", to: "Bengaluru", date: "2026-10-02", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 366, from: "Delhi", to: "Bengaluru", date: "2026-10-02", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 367, from: "Delhi", to: "Bengaluru", date: "2026-10-03", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 368, from: "Delhi", to: "Bengaluru", date: "2026-10-03", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 369, from: "Delhi", to: "Bengaluru", date: "2026-10-03", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 370, from: "Delhi", to: "Bengaluru", date: "2026-10-04", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 371, from: "Delhi", to: "Bengaluru", date: "2026-10-04", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 372, from: "Delhi", to: "Bengaluru", date: "2026-10-04", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 373, from: "Delhi", to: "Bengaluru", date: "2026-10-05", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 374, from: "Delhi", to: "Bengaluru", date: "2026-10-05", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 375, from: "Delhi", to: "Bengaluru", date: "2026-10-05", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 376, from: "Delhi", to: "Chennai", date: "2026-10-01", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 377, from: "Delhi", to: "Chennai", date: "2026-10-01", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 378, from: "Delhi", to: "Chennai", date: "2026-10-01", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 379, from: "Delhi", to: "Chennai", date: "2026-10-02", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 380, from: "Delhi", to: "Chennai", date: "2026-10-02", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 381, from: "Delhi", to: "Chennai", date: "2026-10-02", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 382, from: "Delhi", to: "Chennai", date: "2026-10-03", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 383, from: "Delhi", to: "Chennai", date: "2026-10-03", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 384, from: "Delhi", to: "Chennai", date: "2026-10-03", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 385, from: "Delhi", to: "Chennai", date: "2026-10-04", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 386, from: "Delhi", to: "Chennai", date: "2026-10-04", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 387, from: "Delhi", to: "Chennai", date: "2026-10-04", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 388, from: "Delhi", to: "Chennai", date: "2026-10-05", price: 4500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 389, from: "Delhi", to: "Chennai", date: "2026-10-05", price: 5000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 390, from: "Delhi", to: "Chennai", date: "2026-10-05", price: 5500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 391, from: "Delhi", to: "Goa", date: "2026-10-01", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 392, from: "Delhi", to: "Goa", date: "2026-10-01", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 393, from: "Delhi", to: "Goa", date: "2026-10-01", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 394, from: "Delhi", to: "Goa", date: "2026-10-02", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 395, from: "Delhi", to: "Goa", date: "2026-10-02", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 396, from: "Delhi", to: "Goa", date: "2026-10-02", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 397, from: "Delhi", to: "Goa", date: "2026-10-03", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 398, from: "Delhi", to: "Goa", date: "2026-10-03", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 399, from: "Delhi", to: "Goa", date: "2026-10-03", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 400, from: "Delhi", to: "Goa", date: "2026-10-04", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 401, from: "Delhi", to: "Goa", date: "2026-10-04", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 402, from: "Delhi", to: "Goa", date: "2026-10-04", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 403, from: "Delhi", to: "Goa", date: "2026-10-05", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 404, from: "Delhi", to: "Goa", date: "2026-10-05", price: 3200, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 405, from: "Delhi", to: "Goa", date: "2026-10-05", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 406, from: "Delhi", to: "Ahmedabad", date: "2026-10-01", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 407, from: "Delhi", to: "Ahmedabad", date: "2026-10-01", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 408, from: "Delhi", to: "Ahmedabad", date: "2026-10-01", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 409, from: "Delhi", to: "Ahmedabad", date: "2026-10-02", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 410, from: "Delhi", to: "Ahmedabad", date: "2026-10-02", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 411, from: "Delhi", to: "Ahmedabad", date: "2026-10-02", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 412, from: "Delhi", to: "Ahmedabad", date: "2026-10-03", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 413, from: "Delhi", to: "Ahmedabad", date: "2026-10-03", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 414, from: "Delhi", to: "Ahmedabad", date: "2026-10-03", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 415, from: "Delhi", to: "Ahmedabad", date: "2026-10-04", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 416, from: "Delhi", to: "Ahmedabad", date: "2026-10-04", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 417, from: "Delhi", to: "Ahmedabad", date: "2026-10-04", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 418, from: "Delhi", to: "Ahmedabad", date: "2026-10-05", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 419, from: "Delhi", to: "Ahmedabad", date: "2026-10-05", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 420, from: "Delhi", to: "Ahmedabad", date: "2026-10-05", price: 3200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 421, from: "Goa", to: "Pune", date: "2026-10-01", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 422, from: "Goa", to: "Pune", date: "2026-10-01", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 423, from: "Goa", to: "Pune", date: "2026-10-01", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 424, from: "Goa", to: "Pune", date: "2026-10-02", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 425, from: "Goa", to: "Pune", date: "2026-10-02", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 426, from: "Goa", to: "Pune", date: "2026-10-02", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 427, from: "Goa", to: "Pune", date: "2026-10-03", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 428, from: "Goa", to: "Pune", date: "2026-10-03", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 429, from: "Goa", to: "Pune", date: "2026-10-03", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 430, from: "Goa", to: "Pune", date: "2026-10-04", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 431, from: "Goa", to: "Pune", date: "2026-10-04", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 432, from: "Goa", to: "Pune", date: "2026-10-04", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 433, from: "Goa", to: "Pune", date: "2026-10-05", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 434, from: "Goa", to: "Pune", date: "2026-10-05", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 435, from: "Goa", to: "Pune", date: "2026-10-05", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },



{ id: 436, from: "Goa", to: "Mumbai", date: "2026-10-01", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 437, from: "Goa", to: "Mumbai", date: "2026-10-01", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 438, from: "Goa", to: "Mumbai", date: "2026-10-01", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 439, from: "Goa", to: "Mumbai", date: "2026-10-02", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 440, from: "Goa", to: "Mumbai", date: "2026-10-02", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 441, from: "Goa", to: "Mumbai", date: "2026-10-02", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 442, from: "Goa", to: "Mumbai", date: "2026-10-03", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 443, from: "Goa", to: "Mumbai", date: "2026-10-03", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 444, from: "Goa", to: "Mumbai", date: "2026-10-03", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 445, from: "Goa", to: "Mumbai", date: "2026-10-04", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 446, from: "Goa", to: "Mumbai", date: "2026-10-04", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 447, from: "Goa", to: "Mumbai", date: "2026-10-04", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 448, from: "Goa", to: "Mumbai", date: "2026-10-05", price: 1500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 449, from: "Goa", to: "Mumbai", date: "2026-10-05", price: 1700, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 450, from: "Goa", to: "Mumbai", date: "2026-10-05", price: 1900, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },



{ id: 451, from: "Goa", to: "Nashik", date: "2026-10-01", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 452, from: "Goa", to: "Nashik", date: "2026-10-01", price: 2400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 453, from: "Goa", to: "Nashik", date: "2026-10-01", price: 2600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 454, from: "Goa", to: "Nashik", date: "2026-10-02", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 455, from: "Goa", to: "Nashik", date: "2026-10-02", price: 2400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 456, from: "Goa", to: "Nashik", date: "2026-10-02", price: 2600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 457, from: "Goa", to: "Nashik", date: "2026-10-03", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 458, from: "Goa", to: "Nashik", date: "2026-10-03", price: 2400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 459, from: "Goa", to: "Nashik", date: "2026-10-03", price: 2600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 460, from: "Goa", to: "Nashik", date: "2026-10-04", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 461, from: "Goa", to: "Nashik", date: "2026-10-04", price: 2400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 462, from: "Goa", to: "Nashik", date: "2026-10-04", price: 2600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 463, from: "Goa", to: "Nashik", date: "2026-10-05", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 464, from: "Goa", to: "Nashik", date: "2026-10-05", price: 2400, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 465, from: "Goa", to: "Nashik", date: "2026-10-05", price: 2600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 466, from: "Goa", to: "Nanded", date: "2026-10-01", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 467, from: "Goa", to: "Nanded", date: "2026-10-01", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 468, from: "Goa", to: "Nanded", date: "2026-10-01", price: 3000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 469, from: "Goa", to: "Nanded", date: "2026-10-02", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 470, from: "Goa", to: "Nanded", date: "2026-10-02", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 471, from: "Goa", to: "Nanded", date: "2026-10-02", price: 3000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 472, from: "Goa", to: "Nanded", date: "2026-10-03", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 473, from: "Goa", to: "Nanded", date: "2026-10-03", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 474, from: "Goa", to: "Nanded", date: "2026-10-03", price: 3000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 475, from: "Goa", to: "Nanded", date: "2026-10-04", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 476, from: "Goa", to: "Nanded", date: "2026-10-04", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 477, from: "Goa", to: "Nanded", date: "2026-10-04", price: 3000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 478, from: "Goa", to: "Nanded", date: "2026-10-05", price: 2500, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 479, from: "Goa", to: "Nanded", date: "2026-10-05", price: 2800, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 480, from: "Goa", to: "Nanded", date: "2026-10-05", price: 3000, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },


{ id: 481, from: "Goa", to: "Delhi", date: "2026-10-01", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 482, from: "Goa", to: "Delhi", date: "2026-10-01", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 483, from: "Goa", to: "Delhi", date: "2026-10-01", price: 3600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 484, from: "Goa", to: "Delhi", date: "2026-10-02", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 485, from: "Goa", to: "Delhi", date: "2026-10-02", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 486, from: "Goa", to: "Delhi", date: "2026-10-02", price: 3600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 487, from: "Goa", to: "Delhi", date: "2026-10-03", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 488, from: "Goa", to: "Delhi", date: "2026-10-03", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 489, from: "Goa", to: "Delhi", date: "2026-10-03", price: 3600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 490, from: "Goa", to: "Delhi", date: "2026-10-04", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 491, from: "Goa", to: "Delhi", date: "2026-10-04", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 492, from: "Goa", to: "Delhi", date: "2026-10-04", price: 3600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 493, from: "Goa", to: "Delhi", date: "2026-10-05", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 494, from: "Goa", to: "Delhi", date: "2026-10-05", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 495, from: "Goa", to: "Delhi", date: "2026-10-05", price: 3600, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },




{ id: 496, from: "Goa", to: "Bengaluru", date: "2026-10-01", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 497, from: "Goa", to: "Bengaluru", date: "2026-10-01", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 498, from: "Goa", to: "Bengaluru", date: "2026-10-01", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 499, from: "Goa", to: "Bengaluru", date: "2026-10-02", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 500, from: "Goa", to: "Bengaluru", date: "2026-10-02", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 501, from: "Goa", to: "Bengaluru", date: "2026-10-02", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 502, from: "Goa", to: "Bengaluru", date: "2026-10-03", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 503, from: "Goa", to: "Bengaluru", date: "2026-10-03", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 504, from: "Goa", to: "Bengaluru", date: "2026-10-03", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 505, from: "Goa", to: "Bengaluru", date: "2026-10-04", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 506, from: "Goa", to: "Bengaluru", date: "2026-10-04", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 507, from: "Goa", to: "Bengaluru", date: "2026-10-04", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 508, from: "Goa", to: "Bengaluru", date: "2026-10-05", price: 1800, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 509, from: "Goa", to: "Bengaluru", date: "2026-10-05", price: 2000, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 510, from: "Goa", to: "Bengaluru", date: "2026-10-05", price: 2200, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },




{ id: 511, from: "Goa", to: "Chennai", date: "2026-10-01", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 512, from: "Goa", to: "Chennai", date: "2026-10-01", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 513, from: "Goa", to: "Chennai", date: "2026-10-01", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 514, from: "Goa", to: "Chennai", date: "2026-10-02", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 515, from: "Goa", to: "Chennai", date: "2026-10-02", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 516, from: "Goa", to: "Chennai", date: "2026-10-02", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 517, from: "Goa", to: "Chennai", date: "2026-10-03", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 518, from: "Goa", to: "Chennai", date: "2026-10-03", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 519, from: "Goa", to: "Chennai", date: "2026-10-03", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 520, from: "Goa", to: "Chennai", date: "2026-10-04", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 521, from: "Goa", to: "Chennai", date: "2026-10-04", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 522, from: "Goa", to: "Chennai", date: "2026-10-04", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 523, from: "Goa", to: "Chennai", date: "2026-10-05", price: 3000, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 524, from: "Goa", to: "Chennai", date: "2026-10-05", price: 3300, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 525, from: "Goa", to: "Chennai", date: "2026-10-05", price: 3500, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },



{ id: 526, from: "Goa", to: "Ahmedabad", date: "2026-10-01", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 527, from: "Goa", to: "Ahmedabad", date: "2026-10-01", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 528, from: "Goa", to: "Ahmedabad", date: "2026-10-01", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 529, from: "Goa", to: "Ahmedabad", date: "2026-10-02", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 530, from: "Goa", to: "Ahmedabad", date: "2026-10-02", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 531, from: "Goa", to: "Ahmedabad", date: "2026-10-02", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 532, from: "Goa", to: "Ahmedabad", date: "2026-10-03", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 533, from: "Goa", to: "Ahmedabad", date: "2026-10-03", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 534, from: "Goa", to: "Ahmedabad", date: "2026-10-03", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 535, from: "Goa", to: "Ahmedabad", date: "2026-10-04", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 536, from: "Goa", to: "Ahmedabad", date: "2026-10-04", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 537, from: "Goa", to: "Ahmedabad", date: "2026-10-04", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" },

{ id: 538, from: "Goa", to: "Ahmedabad", date: "2026-10-05", price: 2200, bus_name: "Godavari", type: "Sleeper", time: "05:00 PM" },
{ id: 539, from: "Goa", to: "Ahmedabad", date: "2026-10-05", price: 2500, bus_name: "Kaveri", type: "Sleeper", time: "08:00 PM" },
{ id: 540, from: "Goa", to: "Ahmedabad", date: "2026-10-05", price: 2800, bus_name: "Global Tourist BLACK HORSE", type: "Sleeper", time: "10:00 PM" }
];

const fromInput = document.getElementById('fromInput');
const toInput = document.getElementById('toInput');
const dateInput = document.getElementById('dateInput');
const searchBtn = document.getElementById('searchBtn');
const resultDisplay = document.getElementById('resultDisplay');

function searchTrips() {
    const fromValue = fromInput.value.trim().toLowerCase();
    const toValue = toInput.value.trim().toLowerCase();
    const dateValue = dateInput.value;
    resultDisplay.style.display = 'flex';
    if (!fromValue || !toValue) {
        resultDisplay.innerHTML = `
            <p class="error-msg">
                Please enter both departure and destination locations.
            </p>
        `;
        return;
    }
    const matchedTrips = tripDatabase.filter(trip => {
        const matchesFrom =
            trip.from.toLowerCase() === fromValue;
        const matchesTo =
            trip.to.toLowerCase() === toValue;
        const matchesDate =
            dateValue ? trip.date === dateValue : true;
        return matchesFrom && matchesTo && matchesDate;
    });
    displayResults(matchedTrips);
}
searchBtn.addEventListener('click', searchTrips);
function displayResults(trips) {
    resultDisplay.innerHTML = '';
    if (trips.length === 0) {
        const selectedDate =
            dateInput.value || "this date";
        resultDisplay.innerHTML = `
            <h1 class="no-results">
                No Buses On ${selectedDate}
            </h1>
        `;
        return;
    }
    trips.forEach(trip => {
        const tripCard = document.createElement('div');
        tripCard.className = 'trip-card';
        tripCard.innerHTML = `
            <div class="trip-details">
                <h3 style="margin-bottom: 5px;">
                    ${trip.from} To ${trip.to}
                </h3>
                <p>
                    <strong>Bus:</strong>
                    ${trip.bus_name}
                </p>
                <p>
                    <strong>Type:</strong>
                    ${trip.type}
                </p>
                <p style="color: #777;">
                    <strong>Time:</strong>
                    ${trip.time}
                    |
                    <strong>Date:</strong>
                    ${trip.date}
                </p>
            </div>
            <div
                class="trip-action"
                style="
                    display: flex;
                    align-items: center;
                    gap: 15px;
                "
            >
                <span class="price-tag">
                    ₹${trip.price}
                </span>
                <button
                    class="book-btn"
                    onclick="bookTrip(${trip.id})"
                >
                    Book Now
                </button>
            </div>
        `;
        resultDisplay.appendChild(tripCard);
    });
}
function bookTrip(tripId) {
    const selectedTrip =
        tripDatabase.find(trip => trip.id === tripId);
    if (!selectedTrip) {
        alert("Trip not found!");
        return;

    }
    alert(`
Bus: ${selectedTrip.bus_name}
From: ${selectedTrip.from}
To: ${selectedTrip.to}
Date: ${selectedTrip.date}
Time: ${selectedTrip.time}
Price: ₹${selectedTrip.price}
Type: ${selectedTrip.type}
    `);
    

}
