# Stage 1

## REST API Design

### Get Notifications

GET /api/notifications

### Send Notification

POST /api/notifications

### Mark Notification Read

PATCH /api/notifications/:id/read

## Real Time Notification

Using WebSockets for instant updates.

---

# Stage 2

## Database

Using PostgreSQL.

### Notifications Table

```sql
CREATE TABLE notifications (
 id UUID PRIMARY KEY,
 studentID INT,
 message TEXT,
 isRead BOOLEAN,
 createdAt TIMESTAMP
);
```

---

# Stage 3

## Why Query is Slow

- Large data volume
- Missing indexes

## Optimized Query

```sql
SELECT *
FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt DESC;
```

## Index

```sql
CREATE INDEX idx_notifications
ON notifications(studentID, isRead, createdAt DESC);
```

---

# Stage 4

## Performance Improvements

- Redis Cache
- Pagination
- WebSockets
- Lazy Loading

---

# Stage 5

## Better Notification Design

Use Queue System:

- RabbitMQ
- Kafka

Benefits:

- Retry failed emails
- Faster processing
- Scalability

---

# Stage 6

## Priority Inbox

Priority:

```text
Placement > Result > Event
```

Using Priority Queue / Heap.