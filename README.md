# Backend Microservices Project

This repository contains backend microservice implementations for:

- Logging Middleware
- Vehicle Maintenance Scheduler
- Campus Notification System

## Folder Structure

### logging_middleware
Reusable logging middleware integrated across all backend services.

### vehicle_scheduling
Implements Dynamic Programming based Vehicle Maintenance Scheduling using Knapsack Algorithm.

### vehicle_maintence_scheduler
Contains documentation and scheduling approach details.

### notification_app_be
Implements Priority Notification System for campus notifications.

### notification_system_design.md
Contains:
- REST API Design
- Database Design
- Query Optimization
- Scaling Strategies
- Notification Architecture
- Priority Inbox Design

## Technologies Used

- Node.js
- JavaScript
- Axios
- Dotenv

## Features

- Reusable Logging Middleware
- Structured Backend Architecture
- Dynamic Programming Optimization
- Priority Notification Handling
- Production-style Logging
- Environment Variable Configuration

## Logging Middleware

The reusable logger supports:

- info
- debug
- warn
- error
- fatal

Example:

```javascript
Log(
  "backend",
  "info",
  "service",
  "Task completed successfully"
);