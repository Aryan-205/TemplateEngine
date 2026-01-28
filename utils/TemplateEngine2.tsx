"use client";
import { useState } from "react";
import {
  Nav,
  Hero,
  MiddleSection,
  EndSection,
  Footer,
  EditorSidebar,
  ImageEditModal,
  PhotoGallery,
  BlogSection,
  GuestListSection,
  ContactSection,
} from "./Components2";

interface WeddingEngineProps {
  data: any;
  editable?: boolean;
}

export const WeddingEngine = ({
  data: initialData,
  editable = true,
}: WeddingEngineProps) => {
  const [data, setData] = useState(initialData);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [imageModal, setImageModal] = useState<{
    isOpen: boolean;
    field: string;
    title: string;
  }>({
    isOpen: false,
    field: "",
    title: "",
  });

  const handleUpdate = (field: string, value: any) => {
    setData((prev: any) => ({ ...prev, [field]: value }));
  };

  const openImageModal = (field: string, title: string) => {
    setImageModal({ isOpen: true, field, title });
  };

  const handleImageSave = (url: string) => {
    handleUpdate(imageModal.field, url);
  };

  return (
    <div className="font-sans min-h-screen w-full relative">
      {/* Editor Sidebar */}
      {editable && (
        <EditorSidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          data={data}
          onUpdate={handleUpdate}
        />
      )}

      {/* Image Edit Modal */}
      <ImageEditModal
        isOpen={imageModal.isOpen}
        currentUrl={data[imageModal.field] || ""}
        onClose={() => setImageModal({ isOpen: false, field: "", title: "" })}
        onSave={handleImageSave}
        title={imageModal.title}
      />

      {/* Page Content */}
      <Nav links={data.navLinks} />

      {/* Home Section */}
      <section id="Home">
        <Hero
          names={data.names}
          imageUrl={data.heroImg}
          onEditImage={
            editable
              ? () => openImageModal("heroImg", "Edit Hero Image")
              : undefined
          }
        />
        <MiddleSection
          eventDate={data.date}
          location={data.location}
          description={data.story}
          bgColor={data.themeColor}
        />
        <EndSection
          imageUrl={data.detailImg}
          onEditImage={
            editable
              ? () => openImageModal("detailImg", "Edit Detail Image")
              : undefined
          }
        />
      </section>

      {/* Photo Gallery Section */}
      {data.photos && data.photos.length > 0 && (
        <PhotoGallery photos={data.photos} themeColor={data.themeColor} />
      )}

      {/* Blog Section */}
      {data.blogPosts && data.blogPosts.length > 0 && (
        <BlogSection posts={data.blogPosts} themeColor={data.themeColor} />
      )}

      {/* Guest List Section */}
      {data.guests && data.guests.length > 0 && (
        <GuestListSection guests={data.guests} themeColor={data.themeColor} />
      )}

      {/* Contact Section */}
      {data.contact && (
        <ContactSection contact={data.contact} themeColor={data.themeColor} />
      )}

      <Footer names={data.names} date={data.date} />
    </div>
  );
};
