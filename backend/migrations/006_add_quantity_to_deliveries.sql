ALTER TABLE deliveries
ADD COLUMN quantity INTEGER NOT NULL DEFAULT 1;

ALTER TABLE deliveries
ADD CONSTRAINT deliveries_quantity_positive
CHECK (quantity > 0);
