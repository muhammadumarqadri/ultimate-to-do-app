# 🚀 Ultimate To-Do App

A powerful, feature-rich to-do list application built with vanilla HTML, CSS, and JavaScript. Stay organized with tasks, subtasks, priorities, and more!

## ✨ Features

### 📝 Task Management
- **Create Tasks** - Add tasks with titles, due dates, priorities, and tags
- **Edit & Delete** - Modify or remove tasks with intuitive controls
- **Mark Complete** - Toggle task completion with visual feedback
- **Drag & Drop** - Reorder tasks by dragging them around

### 🔄 Subtask System
- **Nested Subtasks** - Create unlimited levels of subtasks
- **Collapsible Interface** - Expand/collapse subtasks for better organization
- **Progress Tracking** - Visual progress bars show subtask completion
- **Individual Management** - Edit, delete, and toggle each subtask independently

### 🎨 User Interface
- **Dark/Light Theme** - Toggle between themes with one click
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Live Clock** - Real-time clock display in the footer
- **Smooth Animations** - Polished transitions and interactions

### 🔍 Organization Tools
- **Search Functionality** - Find tasks quickly with real-time search
- **Priority Levels** - Set tasks as High, Medium, or Low priority
- **Tags & Categories** - Organize tasks with custom tags
- **Smart Filtering** - Show/hide completed tasks
- **Multiple Sorting** - Sort by creation date, due date, or priority

### 💾 Data Persistence
- **Local Storage** - All data saved automatically in browser
- **Theme Persistence** - Remembers your preferred theme
- **No Data Loss** - Tasks persist between browser sessions

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with flexbox, animations, and responsive design
- **Vanilla JavaScript** - No frameworks, pure JS functionality
- **Local Storage API** - Client-side data persistence

## 📁 Project Structure

```
ultimate-todo-app/
│
├── index.html          # Main HTML structure
├── style.css           # Complete styling and themes
├── script.js           # All JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and icons (optional)
```

## 🚀 Quick Start

### Option 1: Direct Download
1. Download all files to your computer
2. Open `index.html` in any modern web browser
3. Start organizing your tasks!

### Option 2: Clone Repository
```bash
git clone https://github.com/muhammadumarqadri/ultimate-to-do-app.git
cd ultimate-to-do-app
```

### Option 3: Live Server (Recommended for Development)
```bash
# Using VS Code Live Server extension
# Right-click on index.html → "Open with Live Server"

# Or using Node.js live-server
npm install -g live-server
live-server
```

## 📖 How to Use

### Adding Tasks
1. Enter task title in the main input field
2. Set due date (optional)
3. Choose priority level (Low/Medium/High)
4. Add tags or categories (optional)
5. Click "Add Task"

### Managing Subtasks
1. Click the "▶ Subtasks (0/0)" toggle on any task
2. Type in the "Add sub-task..." field and press Enter
3. Use the action buttons (✅ ✏️ ❌ ➕) to manage subtasks
4. Create nested subtasks by clicking the ➕ button on existing subtasks

### Organization Features
- **Search**: Type in the search bar to filter tasks
- **Filter**: Toggle "Show Completed" to hide/show finished tasks
- **Sort**: Use the dropdown to sort by different criteria
- **Theme**: Click the 🌓 button to switch between light/dark modes

## 🎯 Key Functionalities

| Feature | Description | Usage |
|---------|-------------|--------|
| **Task Creation** | Add new tasks with details | Fill form and click "Add Task" |
| **Subtask Management** | Organize tasks into subtasks | Click task toggle, add subtasks |
| **Progress Tracking** | Visual completion progress | Automatic progress bars |
| **Search & Filter** | Find and organize tasks | Use search bar and filters |
| **Theme Toggle** | Switch visual themes | Click theme button (🌓) |
| **Drag & Drop** | Reorder tasks | Drag tasks to new positions |
| **Data Persistence** | Save data locally | Automatic via localStorage |

## 🎨 Customization

### Themes
The app includes both light and dark themes with smooth transitions. Customize colors by modifying the CSS variables:

```css
:root {
  --primary-color: #4CAF50;
  --secondary-color: #45a049;
  --background-color: #ffffff;
  --text-color: #333333;
}
```

### Priority Colors
Customize priority indicators by updating the CSS classes:

```css
.task.high { border-left: 4px solid #f44336; }
.task.medium { border-left: 4px solid #ff9800; }
.task.low { border-left: 4px solid #4caf50; }
```

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

**Minimum Requirements**: ES6 support, Local Storage API

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Ideas for Contributions
- 🔔 Notification system
- 📊 Statistics and analytics
- 🔄 Data export/import
- 🎨 Additional themes
- 📱 PWA functionality
- 🌐 Multi-language support

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Muhammad Umar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🐛 Known Issues

- None currently! Please report bugs via GitHub Issues.

## 📈 Changelog

### Version 1.0.0 (Current)
- ✨ Initial release
- 📝 Full task management system
- 🔄 Collapsible subtasks
- 🎨 Dark/Light themes
- 🔍 Search and filtering
- 💾 Local storage persistence

## 👨‍💻 Author

**Muhammad Umar**
- GitHub: [@yourusername](https://github.com/muhammadumarqadri)
- LinkedIn: [Your LinkedIn](www.linkedin.com/in/muhammad-umar-fullstack-python-developer)
- Email: muhammadumarqadri3@gmail.com

## 🙏 Acknowledgments

- Icons from various emoji sets
- Inspiration from modern productivity apps
- Community feedback and suggestions

## 📞 Support

Having issues? Here's how to get help:

1. 📖 Check the documentation above
2. 🔍 Search existing [GitHub Issues](https://github.com/muhammadumarqadri/ultimate-to-do-app/issues)
3. 🆕 Create a new issue with detailed information
4. 💬 Join our community discussions

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

[Demo](https://muhammadumarqadri.github.io/ultimate-to-do-app) • [Report Bug](https://github.com/muhammadumarqadri/ultimate-to-do-app/issues) • [Request Feature](https://github.com/muhammadumarqadri/ultimate-to-do-app/issues)

Made with ❤️ and ☕

</div>
