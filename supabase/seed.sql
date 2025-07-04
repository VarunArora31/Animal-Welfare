-- Insert sample NGOs
INSERT INTO ngos (name, description, address, latitude, longitude, phone, email, website, verified) VALUES
('Animal Rescue Foundation', 'Dedicated to rescuing and rehabilitating abandoned and injured animals across the city.', '123 Rescue Street, City Center, New York', 40.7128, -74.0060, '+1 (555) 123-4567', 'contact@animalrescue.org', 'www.animalrescue.org', true),
('Wildlife Protection Society', 'Working to protect wildlife habitats and endangered species through conservation efforts.', '456 Conservation Ave, Green District, California', 34.0522, -118.2437, '+1 (555) 987-6543', 'info@wildlifeprotection.org', 'www.wildlifeprotection.org', true),
('Street Animals Care', 'Providing medical care, food, and shelter for street animals in urban areas.', '789 Care Boulevard, Suburb Area, Texas', 29.7604, -95.3698, '+1 (555) 456-7890', 'help@streetanimalscare.org', 'www.streetanimalscare.org', true),
('Pet Rehabilitation Center', 'Specialized in rehabilitation and therapy for injured and disabled pets.', '321 Rehab Lane, Medical District, Florida', 25.7617, -80.1918, '+1 (555) 321-0987', 'support@petrehab.org', 'www.petrehab.org', true),
('Farm Animal Sanctuary', 'Providing sanctuary and care for rescued farm animals.', '654 Farm Road, Rural County, Oregon', 45.5152, -122.6784, '+1 (555) 654-3210', 'sanctuary@farmanimals.org', 'www.farmanimals.org', true);

-- Insert sample veterinarians
INSERT INTO veterinarians (name, specialization, address, latitude, longitude, phone, email, available_24_7) VALUES
('City Veterinary Clinic', 'General Practice', '100 Main Street, Downtown, New York', 40.7580, -73.9855, '+1 (555) 100-2000', 'emergency@cityvet.com', true),
('Emergency Animal Hospital', 'Emergency Care', '200 Hospital Ave, Medical Center, California', 34.0689, -118.2590, '+1 (555) 200-3000', 'contact@emergencyanimals.com', true),
('Suburban Pet Care', 'General Practice', '300 Suburban Blvd, Suburbs, Texas', 29.7749, -95.4194, '+1 (555) 300-4000', 'info@suburbanpets.com', false),
('Exotic Animal Clinic', 'Exotic Animals', '400 Exotic Way, Zoo District, Florida', 25.7907, -80.1300, '+1 (555) 400-5000', 'exotic@animalclinic.com', false),
('24/7 Pet Emergency', 'Emergency Care', '500 Emergency Drive, Hospital District, Oregon', 45.5372, -122.6500, '+1 (555) 500-6000', '247@petemergency.com', true);

-- Note: Sample users and donations would be created through the application
-- as they require proper authentication and user IDs from Supabase Auth
