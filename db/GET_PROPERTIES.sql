SELECT * FROM properties
WHERE ($1 IS NULL OR property_id = $1);