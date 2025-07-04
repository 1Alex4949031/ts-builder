# 💻 Builder Pattern (TypeScript Example)

Это пример реализации порождающего паттерна проектирования **Builder (Строитель)** на языке TypeScript.

Паттерн Builder позволяет **создавать сложные объекты пошагово**, скрывая детали реализации, и обеспечивает **гибкость и читаемость** при конфигурации объекта.

---

## 📦 Структура

- **Product** — `Computer`  
  Объект, который строится с помощью билдера.

- **Builder** — `ComputerBuilder` (интерфейс)  
  Определяет методы пошаговой сборки.

- **ConcreteBuilder** — `GamingComputerBuilder`  
  Реализует интерфейс Builder и хранит промежуточное состояние.

- **Director** — `Director`  
  Управляет порядком сборки, используя заданного билдера.

---

## 📁 Файлы

- `Computer.ts` — класс создаваемого объекта (Product).
- `ComputerBuilder.ts` — интерфейс билдера.
- `GamingComputerBuilder.ts` — реализация билдера.
- `Director.ts` — класс, управляющий порядком сборки.
- `main.ts` — пример использования.

---
