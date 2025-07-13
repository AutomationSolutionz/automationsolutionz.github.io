---
slug: zeuz-platform-20250712
title: ZeuZ Platform 20250712
authors: ['antu', 'sazid']
tags: ['changelog']
---

*Release date: July 12, 2025*

Welcome to the July 2025 release of the ZeuZ platform! 🚀 This release brings significant improvements to browser testing, AI capabilities, test case management, scheduling, and dashboard features.

## Chrome for Testing

Test your web applications across any specific version of Chrome, including pre-release builds (Dev, Beta, Canary). ZeuZ now provides complete browser version control with automated version management.

**Key Benefits:**
- Validate cross-version compatibility
- Pinpoint bugs in specific Chrome builds
- Test against upcoming Chrome features
- Fully automated version-targeted testing

**Usage:** Add a chrome:version parameter to your "Go to link" action:

| Field | Sub Field | Value |
|--|--|--|
| chrome:version | optional parameter | **%\|my_version\|%** or **125.0.6382.0** |

**Smart Version Management:**
- Auto-cleanup unused versions after 90 days
- Latest version auto-updates every 7 days
- Automatic download and installation of Chrome and ChromeDriver

<video controls loop>
  <source src="/blog/zeuz-platform-20250712/463816684-44b90f6f-bf8b-45d3-a89c-0216e2aafbb4.mp4" type="video/mp4" />
</video>

---

## Enhanced ZAI Chatbot

ZAI, your AI-powered testing assistant, now features improved memory and knowledge capabilities for more personalized and accurate responses.

**New Features:**
- **Smarter Memory:** Saves chat history for personalized, coherent responses
- **Knowledge-Powered Answers:** Real-time answers from product documentation and knowledge base

![ZAI Chatbot demo](463820915-c1f8d7ca-a7fc-43de-bfd9-e18f3f29b753.png)

## ZIP Import for Test Cases

Comprehensive ZIP import functionality now supports test cases with all related attachments, improving data integrity and providing a complete import/export experience.

**Features:**
- Import test cases from ZIP files with structured folder support
- Embedded metadata (index.json) handling
- Test case and step-level attachment processing
- Automatic ID mapping and database integration
- Full backward compatibility with JSON imports

**Supported File Structure:**
```
TestCases_backup_export.zip
├── index.json
└── test_cases/
    └── {tc_id}/
        ├── tc.json
        ├── attachments/
        │   ├── file1.pdf
        │   └── file2.csv
        └── steps_attachments/
            └── step_{step_id}/
                ├── step_file1.csv
                └── step_file2.txt
```

---

## Enhanced Scheduler Management

Streamlined scheduler experience with in-context interactions and bulk operations, eliminating page reloads for better workflow efficiency.

**New Capabilities:**
- **Inline Creation & Editing:** Modal-based scheduler management from the Schedule List page
- **Step-by-Step Creation:** Guided modal for efficient scheduler setup
- **Editable Details:** View and update scheduler information without page navigation
- **Bulk Operations:** Select multiple schedulers for activate/deactivate actions
- **Run History Access:** Popup view of recent run history with full history navigation

<video controls loop>
  <source src="/blog/zeuz-platform-20250712/464002801-d5f18d77-886e-49aa-b9d0-0e03ecf8ed7d.mp4" type="video/mp4" />
</video>

## ZeuZ Dashboard

Central hub providing comprehensive overview of your automation ecosystem with execution engines, test metrics, and storage insights.

<video controls loop>
  <source src="/blog/zeuz-platform-20250712/464026255-32f99fe1-df37-413a-a869-925113da4c55.mov" type="video/mp4" />
</video>

**Dashboard Components:**

**ZeuZ Node Management:**
- One-click ZeuZ Node download
- Platform-specific connection guides (Windows, Mac, Linux)
- Quick access to Node, Server, Changelog, and Documentation

**Build Health Monitoring:**
- View health by milestones or versions
- Pass/Fail metrics with visual percentages
- Hover for detailed counts and percentages

**Automatability Overview:**
- Donut chart visualization of test case categories
- Color-coded automation status tracking