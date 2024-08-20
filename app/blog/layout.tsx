export default function BlogPageLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex">
        <div className="flex-grow pt-6 md:overflow-y-auto px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">{children}</div>
      </div>
    );
  }