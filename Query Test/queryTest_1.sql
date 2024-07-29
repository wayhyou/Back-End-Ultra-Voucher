SELECT 
    id, 
    name, 
    (
        SELECT 
            name 
        FROM data 
        WHERE id = data.parent_id
    ) AS parent_name
FROM data
ORDER BY id ASC;