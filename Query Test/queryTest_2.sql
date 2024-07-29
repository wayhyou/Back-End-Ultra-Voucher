SELECT 
    d.id,
    d.name,
    p.name AS parent_name
FROM 
    data d
LEFT JOIN 
    data p ON d.parent_id = p.id;
