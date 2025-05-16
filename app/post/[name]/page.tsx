import posts from "@/lib/posts.json";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const slug = params.name;
  const post = posts.find((p) => p.post === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `NestJS Google OAuth - ${post.post}`,
    description: `ขั้นตอนการเชื่อมต่อ NestJS กับ Google OAuth และการจัดการ JWT | Post ${post.post}`,
    openGraph: {
      title: `NestJS Google OAuth - ${post.post}`,
      description: "สรุปกระบวนการเชื่อมต่อ Google OAuth ในระบบ Full-stack",
      url: `https://wansing.dev/post/${post.post}`,
      type: "article",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: { name: string };
}) {
  const slug = params.name;

  const post = posts.find((p) => p.post === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <main className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-8">
        NestJS Sign-in with Google OAuth
      </h1>

      <section className="mb-8 text-gray-800">
        <h2 className="text-2xl font-semibold mb-2">
          🧠 ความรู้ที่เกี่ยวข้องเบื้องต้น:
        </h2>
        <p className="leading-relaxed">
          OAuth 2.0, NestJS Passport Strategy, REST API, TypeORM หรือ Prisma
          (สำหรับ PostgreSQL)
        </p>
      </section>

      {post.content.map((section, i) => (
        <section key={i} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            {section.title}
          </h2>

          {section.knowledge && section.knowledge.length > 0 && (
            <>
              <h3 className="text-xl font-medium mb-2">ความรู้ที่เกี่ยวข้อง</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {section.knowledge.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {section.process && section.process.length > 0 && (
            <>
              <h3 className="text-xl font-medium mb-2">ขั้นตอนการทำงาน</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-800">
                {section.process.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </section>
      ))}
    </main>
  );
}
