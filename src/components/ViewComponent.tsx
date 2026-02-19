const ViewComponent = ({ selectedArticle }: { selectedArticle?: any }) => {
  return (
    <div className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg max-h-[calc(100vh-100px)] overflow-y-auto p-5 w-[800px]">
        <div
          className="
            max-w-none
            [&_ol]:list-decimal
            [&_ol]:pl-6
            [&_ul]:list-disc
            [&_ul]:pl-6
            [&_li]:mb-2
            [&_p]:mb-3
            [&_img]:rounded-lg
            [&_img]:my-4
          "
          dangerouslySetInnerHTML={{
            __html: selectedArticle?.article || "",
          }}
        />
      </div>
    </div>
  );
};

export default ViewComponent;
