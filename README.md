# T3 Stack Template with ShadCN Integration

This repository provides a template for developing web applications using the T3 stack, enhanced with the integration of
ShadCN for improved UI components and styles. Additionally, it includes NextAuth for authentication and Prisma for
database management, making it a comprehensive solution for modern web development.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

This template combines the power of the T3 stack, which includes TypeScript, TailwindCSS, tRPC, and Next.js, with the
design capabilities of ShadCN. It also integrates NextAuth for authentication and Prisma for database management. The
goal is to provide a robust starting point for building modern web applications with a well-structured codebase and
beautiful, reusable UI components.

## Features

- **[T3 Stack](https://create.t3.gg/)**: Utilize the best-in-class tools and libraries:
  - [Next.js](https://nextjs.org)
  - [NextAuth.js](https://next-auth.js.org)
  - [Prisma](https://prisma.io)
  - [Tailwind CSS](https://tailwindcss.com)
  - [tRPC](https://trpc.io)
- **[ShadCN](https://ui.shadcn.com/)**: Integrated for enhanced UI components and styles, making it easier to build visually appealing
  applications.
- **ESLint and Prettier**: Pre-configured for code quality and consistency.
- **Husky and Lint-staged**: Set up for pre-commit hooks to ensure code quality.

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and
contributions are welcome!

## Project Structure

```plaintext
.
├── prisma/              # Prisma schema and migrations
│   └── schema.prisma    # Prisma schema file
├── public/              # Static assets
├── src/                 # Source files
│   ├── app/             # Next.js app directory
│   │   ├── _components/ # React components
│   │   │   ├── ui/      # Shadcn components
│   │   │   └── ...      # Other react components
│   │   ├── _lib/        # Shadcn helping functions
│   │   ├── api/         # API routes using tRPC
│   │   ├── layout.tsx   # Initial layout for all pages
│   │   └── page.tsx     # Main entry point
│   └── server/          # Next.js server directory
├── .eslintrc.cjs        # ESLint configuration
├── .prettierrc          # Prettier configuration
├── .gitignore           # Git ignore file
├── .components.json     # Shadcn configuration file
├── next.config.js       # Next.js configuration
├── package.json         # Project metadata and scripts
└── tailwind.config.js   # TailwindCSS configuration
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

## How do I deploy this?

Follow t3's deployment guide for [Vercel](https://create.t3.gg/en/deployment/vercel) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

- [Theo Browne](https://twitter.com/t3dotgg) and the T3 community for the T3 stack.
- [ShadCN](https://shadcn.dev) for the amazing UI components and styles.
- [NextAuth](https://next-auth.js.org) for authentication.
- [Prisma](https://www.prisma.io) for database management.

---

Feel free to customize any section as needed to better suit your project and community standards!
