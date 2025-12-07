// 'use client';

// import FadeIn from '@/components/animations/fade-in';
// import Card from '@/components/ui/card';

// const blogPosts = [
//   {
//     id: 1,
//     title: 'Getting Started with Next.js 14',
//     excerpt: 'Learn how to build modern web applications with Next.js 14 and its new features.',
//     date: '2024-01-15',
//     readTime: '5 min read',
//     emoji: '📘',
//   },
//   {
//     id: 2,
//     title: 'Mastering TypeScript',
//     excerpt: 'Deep dive into TypeScript best practices and advanced patterns.',
//     date: '2024-01-10',
//     readTime: '8 min read',
//     emoji: '📗',
//   },
//   {
//     id: 3,
//     title: 'Building Responsive UIs with Tailwind',
//     excerpt: 'Tips and tricks for creating beautiful responsive designs with Tailwind CSS.',
//     date: '2024-01-05',
//     readTime: '6 min read',
//     emoji: '🎨',
//   },
// ];

// export default function Blog() {
//   return (
//     <div className="min-h-screen py-20 px-4">
//       <div className="max-w-4xl mx-auto">
//         <FadeIn>
//           <h1 className="text-5xl font-bold text-center mb-16">
//             My <span className="text-gradient">Blog</span>
//           </h1>
//         </FadeIn>

//         <div className="space-y-6">
//           {blogPosts.map((post, index) => (
//             <FadeIn key={post.id} delay={index * 0.1}>
//               <Card>
//                 <div className="flex gap-4">
//                   <div className="text-5xl">{post.emoji}</div>
//                   <div className="flex-1">
//                     <h2 className="text-2xl font-bold mb-2 hover:text-purple-400 transition-colors cursor-pointer">
//                       {post.title}
//                     </h2>
//                     <p className="text-slate-400 mb-4">{post.excerpt}</p>
//                     <div className="flex gap-4 text-sm text-slate-500">
//                       <span>📅 {post.date}</span>
//                       <span>⏱️ {post.readTime}</span>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
