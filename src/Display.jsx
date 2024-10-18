function Display({ isRegistered, children }) {
  if (isRegistered) {
    return <>{children}</>;
  }

  return null;
}

export default Display;
