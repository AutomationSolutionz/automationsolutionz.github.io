---
id: actions-security
title: Security Actions
---

## Description
Security actions are measures taken to protect systems, networks, applications, or data from unauthorized access, exploitation, or disruption. These include authentication methods like passwords or multi-factor authentication, authorization to manage user permissions, encryption to secure data, and tools like vulnerability scanners to identify system weaknesses. Additional actions include patch management, intrusion detection, access control, incident response, audits for compliance, and backup procedures to prevent data loss. Together, these actions ensure the security and integrity of systems and data.

---

## Examples of Security actions

### 1. Arachni (Web Application Security Scanner)

---

#### How It Works:
- **Crawls & Tests** - Acts like an automated hacker, scanning web apps by sending malicious inputs to detect vulnerabilities.
- **Checks for Common Threats** - Tests for SQL injection, XSS, file inclusion, and other OWASP Top 10 risks.
- **Generates Reports** - Provides detailed findings with severity levels and remediation steps.

#### Key Points:
✔ Automated vulnerability detection for web apps.  
✔ Simulates attacks to find security flaws.  
✔ Helps meet compliance (GDPR, PCI-DSS).

---

### 2. Nikto (Web Server Vulnerability Scanner)

---

#### How It Works:
- **Scans Server Configurations** - Checks for outdated software, default files, and insecure settings.
- **Tests Known Vulnerabilities** - Uses a database of ~ 7,000+ threats to identify risks.
- **Fast & Lightweight** - Runs quickly but provides high-level security insights.

#### Key Points:
✔ Focuses on web server configurations.  
✔ Detects outdated software and exposed files.  
✔ Useful for compliance audits (PCI-DSS, ISO 27001).

---

### 3. Nmap (Network Mapper and Security Scanner)

---

#### How It Works:
- **Discovers Devices** - Scans networks to find live hosts, open ports, and services.
- **OS & Service Fingerprinting** - Guesses the OS and software versions running on devices.
- **Advanced Scripting** - Can run custom vulnerability checks using NSE (Nmap Scripting Engine).

#### Key Points:
✔ Maps networks and detects active devices.  
✔ Identifies open ports and vulnerable services.  
✔ Used for penetration testing and network audits.

---
### 4. Wapiti (Web Application Vulnerability Scanner)

---

#### How It Works:
- **Black-Box Testing** - Scans without needing source code (like an external attacker).
- **Injects Payloads** - Tests for SQLi, XSS, and command execution by sending malicious inputs.
- **Generates HTML Reports** - Highlights vulnerabilities with proof-of-concept examples.

#### Key Points:
✔ Dynamic testing (real attack simulation).  
✔ Detects injection flaws and security misconfigurations.  
✔ Lightweight alternative to commercial scanners.

---

## Summary

|  Tool          |  Best For             |  How It Works                                    |
|----------------|-----------------------|--------------------------------------------------|
|  **Arachni**   |  Web App Security     |  Scans for SQLi, XSS, and file flaws.            |
|  **Nikto**     |  Web Server Security  |  Finds misconfigurations and outdated software.  |
|  **Nmap**      |  Network Security     |  Maps devices, open ports, and services.         |
|  **Wapiti**    |  Web App Testing      |  Simulates attacks to find vulnerabilities.      |

---
