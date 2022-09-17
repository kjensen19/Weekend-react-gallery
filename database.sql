-- data example:   { id: 6, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', front: true, likes: 0 }


--create table
CREATE TABLE galleryInfo
	(
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR NOT NULL,
	"description" VARCHAR DEFAULT 'No description provided',
	"likes" INTEGER DEFAULT 0
	);
    
-- test data
INSERT INTO galleryInfo (path, description)
	VALUES
		('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');
		
--increment like count(put route to update)
UPDATE galleryinfo SET likes = likes + 1
Where id=1
