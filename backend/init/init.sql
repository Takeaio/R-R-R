CREATE TABLE IF NOT EXISTS reservations (
    id SERIAL PRIMARY KEY,
    room_name VARCHAR(50),
    reserved_by VARCHAR(50),
    start_time TIMESTAMP,
    end_time TIMESTAMP
);
