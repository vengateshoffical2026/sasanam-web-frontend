import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";

interface RichTextEditorProps {
  onChange?: (value: string) => void;
}

const RichTextEditor = ({ onChange }: RichTextEditorProps) => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
    ],
    content: "",
    shouldRerenderOnTransaction: true,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);   // ✅ send value to parent
    },
  });

  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const buttonClass = (active: boolean) =>
    `px-3 py-1 rounded-md text-sm font-medium transition ${
      active
        ? "bg-black text-white"
        : "bg-white border hover:bg-gray-200"
    }`;

  return (
    <div className="w-full max-w-4xl mx-auto border rounded-xl shadow-md bg-white">
      
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-3 border-b bg-gray-50 rounded-t-xl">
        
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonClass(editor.isActive("bold"))}
        >
          <b>B</b>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={buttonClass(editor.isActive("underline"))}
        >
          <u>U</u>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={buttonClass(editor.isActive("bulletList"))}
        >
          • List
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={buttonClass(editor.isActive("orderedList"))}
        >
          1. List
        </button>

        <button
          onClick={addImage}
          className="px-3 py-1 rounded-md bg-white border hover:bg-gray-200 text-sm font-medium"
        >
          🖼 Image
        </button>
      </div>

      {/* Editor */}
      <div className="max-h-[400px] overflow-y-auto">
        <EditorContent
          editor={editor}
          className="
            [&_.ProseMirror]:min-h-[300px]
            [&_.ProseMirror]:min-w-[500px]
            [&_.ProseMirror]:p-4
            [&_.ProseMirror]:outline-none
            [&_.ProseMirror]:focus:outline-none
            [&_.ProseMirror_ul]:list-disc
            [&_.ProseMirror_ul]:pl-6
            [&_.ProseMirror_ol]:list-decimal
            [&_.ProseMirror_ol]:pl-6
          "
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
