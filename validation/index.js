export const validation = {
    name: /^[a-zA-Z0-9-\ ]{4,20}\b$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!*()])[A-Za-z\d@#$%^&+=!*()]{6,}$/,
    enrollment: /^\d{14}$/,
}

export const error = {
    name: 'Minimum length of 4 characters\nMaximum length of 20 characters',
    email: 'Valid email required',
    phone: '10 digits phone number required',
    password: 'At least one uppercase letter\nAt least one lowercase letter\nAt least one digit\nAt least one special character\nMinimum length of 6 characters',
    enrollment: '14 digits enrollment number required',
    course: 'Course is required',
    stream: 'Stream is required',
    section: 'Section is required'
}