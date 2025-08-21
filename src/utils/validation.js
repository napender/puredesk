const validateProjectName = (name) => {
  if (!name || name.trim() === '') {
    return 'Project name cannot be empty.';
  }
  // Basic validation: allow letters, numbers, dashes, and underscores
  if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
    return 'Project name can only contain letters, numbers, dashes, and underscores.';
  }
  return true;
};

module.exports = {
  validateProjectName,
};
