const Loading = () => {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Brand</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Stock</th>
            <th className="px-4 py-3">Created Att</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3, 4, 5].map((row) => (
            <tr key={row} className="border-b border-gray-200">
              <th className="flex items-center px-4 py-4">
                <div className="w-8 h-8 mr-3 rounded bg-gray-200" />
                <div className="h-4 w-32 rounded bg-gray-200" />
              </th>

              <td className="px-4 py-4">
                <div className="h-5 w-20 rounded bg-gray-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-4 w-24 rounded bg-gray-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-4 w-16 rounded bg-gray-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-4 w-12 rounded bg-gray-200" />
              </td>

              <td className="px-4 py-4">
                <div className="h-4 w-24 rounded bg-gray-200" />
              </td>

              <td className="px-4 py-4">
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded bg-gray-200" />
                  <div className="w-4 h-4 rounded bg-gray-200" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Loading;