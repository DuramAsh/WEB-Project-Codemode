from django.db import models


# Create your models here.


class Tutor(models.Model):
    name = models.CharField(max_length=300)
    email = models.EmailField(max_length=300)
    info = models.TextField(max_length=1024)

    def __str__(self):
        return self.name


class TutorPhoneNumbers(models.Model):
    tutor = models.ForeignKey(Tutor, related_name="phones", on_delete=models.CASCADE)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.phone


class Course(models.Model):
    url = models.CharField(max_length=512, default="")
    title = models.CharField(max_length=300)
    description = models.TextField(max_length=300)
    price = models.IntegerField(default=0)
    info = models.TextField(max_length=300)
    tutors = models.ManyToManyField(Tutor, related_name="courses", through="CourseTutor")

    def __str__(self):
        return self.title


class CourseTutor(models.Model):
    course = models.ForeignKey(
        Course, on_delete=models.CASCADE, blank=True, null=True)
    tutor = models.ForeignKey(
        Tutor, on_delete=models.CASCADE, blank=True, null=True)
    status = models.CharField(max_length=300)
    time = models.CharField(max_length=300)
    amount = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.course.title} | {self.time} | {self.tutor.name}"


class Student(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=300)
    cash = models.FloatField(default=0)
    courses = models.ManyToManyField(CourseTutor, related_name="students", through="StudentCourseTutor")

    def __str__(self):
        return self.name


class StudentPhoneNumbers(models.Model):
    student = models.ForeignKey(Student, related_name="phones", on_delete=models.CASCADE)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.phone


class StudentCourseTutor(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, blank=True, null=True)
    course_tutor = models.ForeignKey(
        CourseTutor, on_delete=models.CASCADE, blank=True, null=True)
    paid = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.student.name} | {self.course_tutor}"


class Money(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, blank=True, null=True)
    time = models.DateTimeField(auto_now_add=True)
    type = models.BooleanField(default=False)
    message = models.TextField(max_length=300)
    status = models.CharField(max_length=300)

    def __str__(self):
        return self.student, self.time
