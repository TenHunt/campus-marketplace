# ERD ENTITIES LIST - for ERD Tool Input

## ENTITIES (11 total)

### Core Entities
1. **USER**
2. **USER_PROFILE** 
3. **CATEGORY**
4. **ITEM**
5. **ITEM_PHOTO**

### Transaction Entities  
6. **CART**
7. **CART_ITEM**
8. **ORDER** 
9. **ORDER_ITEM**
10. **PAYMENT**

### Communication Entity
11. **MESSAGE**

---

## RELATIONSHIPS FOR ERD

### 1:1 Relationships
- USER ||--|| USER_PROFILE
- USER ||--|| CART

### 1:M Relationships  
- USER ||--o{ ITEM (as seller)
- USER ||--o{ ORDER (as buyer)
- USER ||--o{ ORDER (as seller)  
- USER ||--o{ MESSAGE (as sender)
- USER ||--o{ MESSAGE (as receiver)
- CATEGORY ||--o{ ITEM
- ITEM ||--o{ ITEM_PHOTO
- ITEM ||--o{ CART_ITEM
- ITEM ||--o{ ORDER_ITEM
- CART ||--o{ CART_ITEM
- ORDER ||--o{ ORDER_ITEM
- ORDER ||--o{ PAYMENT
- ITEM ||--o{ MESSAGE (optional)

### Key Attributes for ERD
**Primary Keys (PK):** All entities have auto-generated IDs
**Foreign Keys (FK):** Reference relationships shown above

---

## ERD TOOL INSTRUCTIONS

### For Draw.io / Lucidchart:
1. Create 11 entity boxes
2. Add primary key (PK) to each entity
3. Add foreign keys (FK) based on relationships above
4. Use crow's foot notation for cardinality
5. Show 1:1 with straight line + single marks
6. Show 1:M with straight line + crow's foot

### Entity Colors Suggestion:
- **Core Entities:** Blue (USER, ITEM, CATEGORY)
- **Junction Tables:** Yellow (CART_ITEM, ORDER_ITEM)  
- **Transaction:** Green (CART, ORDER, PAYMENT)
- **Support:** Orange (USER_PROFILE, ITEM_PHOTO, MESSAGE)

---

## QUICK REFERENCE

**Most Important Relationships:**
1. USER sells ITEM
2. USER buys ITEM (via CART → ORDER)
3. ITEM belongs to CATEGORY
4. USER messages USER about ITEM

**Junction Tables:**
- CART_ITEM (resolves USER-ITEM cart relationship)
- ORDER_ITEM (resolves ORDER-ITEM relationship)
