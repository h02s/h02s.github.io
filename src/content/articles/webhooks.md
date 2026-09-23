---
title: "Webhook چیست؟"
description: "یک یادداشت ساده درباره Webhook، تفاوت آن با API polling و کاربردهایش."
date: 2026-09-24
tags: ["backend", "api", "web"]
category: "Backend"
---

## خلاصه

Webhook روشی برای اطلاع‌رسانی یک سرویس به سرویس دیگر هنگام رخ دادن یک رویداد است.

به‌جای اینکه سرویس A مرتب از سرویس B بپرسد «چیزی تغییر کرده؟»، سرویس B هنگام وقوع رویداد یک HTTP request به آدرس مشخصی در سرویس A می‌فرستد.

## چیزی که از این موضوع یاد گرفتم

Webhook را می‌توان یک الگوی ساده برای event-driven communication در نظر گرفت. در عمل باید موضوعاتی مثل احراز هویت، retry، idempotency و ثبت لاگ را هم در نظر گرفت.

## مثال

فرض کنید پرداختی موفق شده است:

```text
Payment Service
      |
      | POST /webhooks/payment
      v
Your Application
      |
      +--> update order
      +--> send notification
```

## نکته

Webhook به‌خودی‌خود جای API را نمی‌گیرد؛ این دو معمولاً مکمل یکدیگرند.
