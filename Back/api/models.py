from django.db import models

# Create your models here.


class Tutor(models.Model):
    name = models.CharField(max_length=300)
    email = models.EmailField(max_length=300)
    phone = models.CharField(max_length=300)
    info = models.TextField(max_length=1024)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'info': self.info
        }


class Course(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField(max_length=300)
    price = models.IntegerField(default=0)
    info = models.TextField(max_length=300)

    def __str__(self):
        return self.title

    def to_json(self):
        return {
            'id': self.pk,
            'title': self.title,
            'description': self.description,
            'price': self.price,
            'info': self.info
        }


class Course_Tutor(models.Model):
    course_id = models.ForeignKey(
        Course, on_delete=models.CASCADE, blank=True, null=True)
    tutor_id = models.ForeignKey(
        Tutor, on_delete=models.CASCADE, blank=True, null=True)
    status = models.CharField(max_length=300)
    time = models.CharField(max_length=300)
    amount = models.IntegerField(default=0)

    def __str__(self):
        return (self.course_id, self.tutor_id)

    def to_json(self):
        return {
            'id': self.pk,
            'course_id': self.course_id,
            'tutor_id': self.tutor_id,
            'status': self.status,
            'time': self.time,
            'amount': self.amount
        }


class Student(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=300)
    phone = models.CharField(max_length=300)
    cash = models.FloatField(default=0)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'cash': self.cash
        }


class Student_Course_Tutor(models.Model):
    student_id = models.ForeignKey(
        Student, on_delete=models.CASCADE, blank=True, null=True)
    course_tutor_id = models.ForeignKey(
        Course_Tutor, on_delete=models.CASCADE, blank=True, null=True)
    paid = models.BooleanField(default=False)

    def __str__(self):
        return (self.student_id, self.course_tutor_id)

    def to_json(self):
        return {
            'id': self.pk,
            'student_id': self.student_id,
            'course_tutor_id': self.course_tutor_id,
            'paid': self.paid
        }


class Money(models.Model):
    student_id = models.ForeignKey(
        Student, on_delete=models.CASCADE, blank=True, null=True)
    time = models.DateTimeField(auto_now_add=True)
    type = models.BooleanField(default=False)
    message = models.TextField(max_length=300)
    status = models.CharField(max_length=300)

    def __str__(self):
        return (self.student_id, self.time)

    def to_json(self):
        return {
            'id': self.pk,
            'student_id': self.student_id,
            'time': self.time,
            'type': self.type,
            'message': self.message,
            'status': self.status
        }
