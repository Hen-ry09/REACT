function Image({ url }) {
  return (
    <img 
      src={url} 
      alt="Card" 
      className="w-full h-48 object-cover rounded-t-lg"
    />
  );
}

export default Image;