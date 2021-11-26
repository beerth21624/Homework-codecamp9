# Codecamp 9

### ศราวุธ อินพล

---

1. ค้นหาชื่อและอายุจาก กะลาสีทุกคน

- select sname,age from sailors;

2. หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือรหัส 103

- select sname from sailors left join reserves on sailors.sid = reserves.sid where reserves.bid = 103;

3. หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดง

- select distinct sid from reserves left join boats on reserves.bid = boats.bid where boats.color = 'Red';

4. หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดง

- select sname from sailors left join reserves on sailors.sid = reserves.sid left join boats on reserves.bid = boats.bid where boats.color = 'Red';

5. หาสีของเรือทั้งหมดที่ถูกจองโดยกะลาสีเรือชื่อ ‘Lubber’

- select distinct color from sailors left join reserves on sailors.sid = reserves.sid left join boats on reserves.bid = boats.bid where sname = ‘Lubber’;

6. หาชื่อของกะลาสีเรือที่จองเรืออย่างน้อย 1 ลำ

- select distinct sname from sailors right join reserves on sailors.sid = reserves.sid;

7. หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงหรือเขียว

- select sname from sailors left join reserves on sailors.sid = reserves.sid left join boats on reserves.bid = boats.bid where boats.color = 'Red' OR boats.color = 'green';

8. หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงและเขียว

- select distinct sname from sailors where sailors.id IN (select distinct sid from sailors left join reserves on sailors.sid = reserves.sid left join boats on reserves.bid = boats.bid where boats.color = 'Red';) AND sailors.sid IN(select distinct sid from sailors left join reserves on sailors.sid = reserves.sid left join boats on reserves.bid = boats.bid where boats.color = 'Green';)

9. หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดงแต่ไม่จองเรือสีเขียว"

- select distinct sname from sailors where sailors.id IN (select distinct sid from sailors left join reserves on sailors.sid = reserves.sid left join boats on reserves.bid = boats.bid where boats.color = 'Red';) AND sailors.sid NOT IN(select distinct sid from sailors left join reserves on sailors.sid = reserves.sid left join boats on reserves.bid = boats.bid where boats.color = 'Green';)
