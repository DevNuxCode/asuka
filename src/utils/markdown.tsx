function renderContent(content: string) {
  const lines = content.split('\n');
  return lines.map((line, index) => {
    if (line.startsWith('## ')) {
      return (
        <h2 key={index} className="text-2xl font-bold mt-8 mb-3 text-primary dark:text-[#CBA135]">
          {line.replace('## ', '')}
        </h2>
      );
    }
    if (line.startsWith('### ')) {
      return (
        <h3 key={index} className="text-xl font-semibold mt-6 mb-2 text-primary dark:text-[#CBA135]">
          {line.replace('### ', '')}
        </h3>
      );
    }
        if (line.trim() === '---') {
        return (
          <div key={index} className="flex items-center my-10">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-2 h-2 mx-4 rounded-full bg-[#CBA135]"></div>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          </div>
        );
      }
    
    if (line.startsWith('- ')) {
      return (
        <li key={index} className="ml-4 my-1 text-gray-600 dark:text-gray-400">
          {line.replace('- ', '')}
        </li>
      );
    }
    if (line.startsWith('*** ')) {
      return (
        <div key={index} className="my-4 p-4 rounded-lg bg-opacity-10" style={{ backgroundColor: '#CBA135' }}>
          <p className="font-semibold italic" style={{ color: '#37654B' }}>
            {line.replace('*** ', '')}
          </p>
        </div>
      );
    }
    if (line.trim() === '') {
      return <div key={index} className="h-3" />;
    }
    return (
  <p key={index} className="my-2 text-gray-600 dark:text-gray-200 leading-relaxed">
    {renderInlineMarkdown(line)}
  </p>
);
  });
}