CREATE TABLE tools (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial tools
INSERT INTO tools (id, name, description, icon, order_index) VALUES
('todos', 'To-Do List', 'Manage your tasks and stay organized', '✓', 1),
('notes', 'Notes', 'Keep your thoughts and ideas organized', '📝', 2),
('calendar', 'Calendar', 'Schedule and manage your events', '📅', 3),
('documents', 'Documents', 'Store and organize your files', '📄', 4);