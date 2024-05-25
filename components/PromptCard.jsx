"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

function PromptCard({ post, handleTagClick, handleEdit, handleDelete }) {
  const [copied, setCopied] = useState("");
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className=" group prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          ></Image>
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-50">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-200">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          ></Image>
        </div>
      </div>

      <p className="my-5 font-satoshi text-sm text-gray-200">{post.prompt}</p>
      <p className="text-blue-300/80 cursor-pointer hover:text-blue-500/80">
        {post.tag.startsWith("#") ? post.tag : `#${post.tag}`}
      </p>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-10 flex-end gap-5 border-t p-3 border-gray-500">
          <p
            className="font-inter text-sm cursor-pointer text-gray-400 hover:scale-105"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm cursor-pointer hover:scale-105 text-red-500"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
}

export default PromptCard;
