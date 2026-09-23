---
title: "Docker به‌عنوان یک Sandbox"
description: "برداشت‌هایی از استفاده از container برای جدا کردن محیط اجرای برنامه‌ها."
date: 2026-09-23
tags: ["docker", "containers", "linux"]
category: "Infrastructure"
---

## خلاصه

Container می‌تواند یک لایه جداسازی عملی برای اجرای برنامه‌ها فراهم کند، بدون اینکه الزاماً به یک ماشین مجازی کامل نیاز داشته باشیم.

## چیزی که برایم مهم بود

Sandbox بودن Docker مطلق نیست. میزان جداسازی به تنظیمات، capabilities، mounts، network و سطح دسترسی بستگی دارد.

برای workloadهای حساس، باید threat model مشخصی داشت و صرفاً به عبارت «داخل container است» اکتفا نکرد.

## مدل ذهنی

```text
Host
 └── Container
      ├── Process isolation
      ├── Filesystem isolation
      ├── Network namespace
      └── Resource limits
```
