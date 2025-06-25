# 🤝 Contributing to Todo App (Maroon Socket) 🤝

_**\*do not contribute to this repository if you're not a member of maroon socket**_

---

🎉 Thanks for your interest in contributing to our hackathon project! 🎉

This guide outlines the workflow we're using to collaborate on the Todo App. Our goal is to ensure a smooth and efficient contribution process during the hackathon.

## 💡 How to Contribute

### 1. Fork the Repository

Go to the main repository on GitHub (`https://github.com/jaitjacob/todo-for-maroon-socket`) and click the "Fork" button in the top-right corner. This creates a copy of the repository under your own GitHub account.

### 2. Clone Your Fork

Clone _your forked repository_ to your local machine:

```bash
git clone https://github.com/your-username/todo-for-maroon-socket

cd your-repo-name
```

### 3. Add Upstream Remote (One-time setup)

Add the original repository as an "upstream" remote. This allows you to fetch updates from the main project.

```bash
git remote add upstream https://github.com/jaitjacob/todo-for-maroon-socket.git
```

### 4. Sync Your Fork (Regularly)

Before starting new work, always pull the latest changes from the `upstream` (original) repository into your local `main` branch to keep your fork up-to-date.

```bash
git checkout main

git pull upstream main
```

### 5. Create a New Branch

Always create a new branch from your `main` branch for your changes. Use descriptive names like `feature/add-dark-mode` or `fix/login-bug`.

```bash
git checkout -b feature/your-feature-name
```

### 6. Make Your Changes

Write your code, ensuring it aligns with our general code style. Test your changes thoroughly to confirm they work as expected.

### 7. Commit Your Changes

Write clear and concise commit messages. A good commit message explains _what_ you changed and _why_.

```bash
git commit -m "feat: implement add task functionality"
```

or

```bash
git commit -m "fix: resolve rendering issue on task completion"
```

### 8. Push Your Branch to Your Fork

Push your new branch with your changes to _your forked repository_ on GitHub.

```bash
git push origin feature/your-feature-name
```

### 9. Create a Pull Request (PR)

Go to your forked repository on GitHub. You should see a prompt to create a Pull Request.

- Ensure the **base repository** is `jaitjacob/todo-for-maroon-socket` and the `main` branch.
- Ensure the **head repository** is `[YOUR_GITHUB_USERNAME]/todo-for-maroon-socket` and your `feature/your-feature-name` branch.
- Provide a clear and concise description of your changes in the PR description.
- **One of your team members will review your PR before merging.**

---

## ❓ Questions or Need Help?

Don't hesitate to ask for help!

- Reach out to your team members directly.
- Post your question in our team's designated communication channel (e.g., Discord).

---

Let's make this hackathon a huge success together! Happy coding! 🚀
