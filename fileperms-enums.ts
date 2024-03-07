enum filePermission {
  NONE = 2,
  READ,
  WRITE,
  EXECUTE,
}

const checkPermission = (
  userPermission: filePermission,
  requiredPermission: filePermission
): boolean => {
  return userPermission >= requiredPermission;
};

console.log(checkPermission(filePermission.READ, filePermission.WRITE));
