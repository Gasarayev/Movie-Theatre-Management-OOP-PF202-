# 🎬 Film Biletlərinin İdarə Edilməsi Sistemi

## 📌 Ümumi Təsvir

Bu layihə JavaScript-də OOP (Object-Oriented Programming) prinsipləri əsasında qurulmuş film biletlərinin idarə edilməsi sistemidir. Layihədə bir neçə sinif yaradılacaq və hər sinif xüsusi bir funksiyanı əhatə edəcək. Siniflər ayrıca fayllarda saxlanılacaq və `import/export` ilə bir-birinə qoşulacaq.

Əsas idarəetmə və testlər `main.js` faylında aparılacaq.

---

## 🧱 Sinif Tələbləri

### 🎥 Movie

#### Xüsusiyyətlər:
- `title` (string): Filmin adı
- `genre` (string): Filmin janrı
- `duration` (number): Filmin müddəti (dəqiqə ilə)
- `releaseDate` (Date): Filmin çıxış tarixi
- `availableTickets` (number): Hal-hazırda mövcud biletlərin sayı
- `_rating` (private, number): Filmin reytinqi (0-10 arası, yalnız metodlarla əldə olunur)

#### Metodlar:
- `isAvailable()`: Filmin yayımlanıb-yayımlanmadığını bu günkü tarixə əsasən yoxlayır
- `getRating()`: Filmin reytinqini qaytarır
- `setRating(value)`: Yeni reytinq təyin edir (yalnız 0-10 aralığında olmalıdır)
- `reduceTickets(quantity)`: Verilən say qədər bileti azaldır
- `increaseTickets(quantity)`: Verilən say qədər bileti artırır

---

### 🎭 Theatre

#### Xüsusiyyətlər:
- `name` (string): Teatrın adı
- `location` (string): Teatrın yerləşdiyi yer
- `movies` (array of Movie): Teatrda göstərilən filmlərin siyahısı

#### Metodlar:
- `addMovie(movie)`: Yeni film əlavə edir
- `removeMovie(title)`: Verilən adda olan filmi silir
- `getMoviesByGenre(genre)`: Verilən janra uyğun filmləri qaytarır
- `showAllMovies()`: Bütün filmləri qaytarır

---

### 👤 Client

#### Xüsusiyyətlər:
- `name` (string): Müştərinin adı
- `age` (number): Müştərinin yaşı
- `tickets` (array): Alınmış biletlərin siyahısı

#### Metodlar:
- `buyTicket(movie, quantity)`: Müəyyən sayda bilet alır. Əgər kifayət qədər bilet yoxdursa, xəbərdarlıq verir.
- `listTickets()`: Müştərinin aldığı bütün biletləri göstərir

---

### 🛠️ Admin (Client-dən miras alır)

#### Əlavə Metodlar:
- `addMovieToTheatre(theatre, movie)`: Verilən teatra yeni film əlavə edir
- `removeMovieFromTheatre(theatre, title)`: Verilən teatrdan filmi silir

---

## 📁 Əsas Tapşırıq (main.js)

1. Yeni bir `Theatre` obyekti yaradın (məsələn: `new Theatre('Cinema City', 'Baku')`)
2. Ən azı **3 fərqli `Movie`** obyekti yaradın və teatra əlavə edin
3. Bir `Client` obyekti yaradın və bilet aldırın
4. `Admin` obyekti yaradın və teatra film əlavə etmə və silmə əməliyyatlarını yerinə yetirin
5. Bütün metodları test edin və nəticələri konsola çıxarın

---

## 🎞️ Nümunə Məlumatlar

### Filmlər:
```js
new Movie("Inception", "Sci-Fi", 148, "2010-07-16", 50)
new Movie("Titanic", "Romance", 195, "1997-12-19", 70)
new Movie("The Batman", "Action", 176, "2022-03-04", 40)
