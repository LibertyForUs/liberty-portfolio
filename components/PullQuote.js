const PullQuote = ({ children, author }) => {
  const text = typeof children === 'string' ? children : children.props?.children || '';
  const firstWord = text.split(' ')[0];
  const restOfText = text.split(' ').slice(1).join(' ');

  return (
    <div className="float-right clear-right w-1/3 ml-6 mb-6 p-4 relative" style={{ fontFamily: 'Playfair Display' }}>
      <span className="absolute -left-4 -top-6 text-6xl text-gray-800 dark:text-gray-200">&ldquo;</span>
      <div className="text-xl md:text-2xl text-gray-800 dark:text-gray-200">
        <span className="text-3xl md:text-4xl font-bold">{firstWord}</span>{' '}
        {restOfText}
      </div>
      {author && (
        <footer className="mt-2 text-gray-600 dark:text-gray-400 italic">— {author}</footer>
      )}
      <span className="absolute -bottom-8 -right-4 text-6xl text-gray-800 dark:text-gray-200">&rdquo;</span>
    </div>
  );
};

export default PullQuote; 