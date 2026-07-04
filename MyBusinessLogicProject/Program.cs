using System;
using System.Collections.Generic;

namespace MyBusinessLogicProject
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to My Business Logic Project!");
            while(true)
            {
                
           
            // Read student ID
            Console.Write("Enter student ID: ");
            int studentId = int.Parse(Console.ReadLine());

            // Read student name
            Console.Write("Enter student name: ");
            string studentName = Console.ReadLine();

            // Read student type
            Console.Write("Enter student type (Standard, Management, Scholarship): ");
            string studentTypeText = Console.ReadLine();

            // Convert text into StudentType enum
            StudentType studentType =
                Enum.Parse<StudentType>(studentTypeText, true);

            Console.Write("Enter term (Fall, Spring, Summer): ");
            string termText = Console.ReadLine();
            Term term = Enum.Parse<Term>(termText, true);
            // Read months late 
            Console.Write("Enter months late: "); 
            int monthsLate = int.Parse(Console.ReadLine());

            // Create Student object from console values
            Student student = new Student
            {
                Id = studentId,
                Name = studentName,
                StudentType = studentType
            };
            Console.WriteLine("Calculating fee...");
            FeeCalculator feeCalculator = new FeeCalculator();
            StudentFee studentFee = feeCalculator.CalculateFee(student, term, monthsLate);
            Console.WriteLine($"Final Fee: {studentFee.FinalFee}");
        } }
        #region Classes
        public class StudentFee
        {
            public StudentType StudentType { get; set; }
            public int StudentId { get; set; }

            public Term CurrentTerm { get; set; }
            public int MonthsLate { get; set; }
            public decimal Discount { get; set; }
            public decimal LateFee { get; set; }
            public decimal FinalFee { get; set; }
        }
        public class Student
        {
            public string? Name { get; set; }
            public StudentType StudentType { get; set; }
            public int Id { get; set; }
        }
        #region Enums
        public enum StudentType
        {
            Standard, Management, Scholarship
        }

        public enum Term
        {
            Fall, Spring, Summer
        }
        #endregion
        #endregion 


        #region Business Logic
        public class FeeCalculator
        {
            private decimal DefaultBaseFee = 15000m;
            private decimal ManagementSeatBaseFee = 30000m;
            private decimal LateFeePerMonth = 100m;
            
            public StudentFee CalculateFee(Student student, Term term, int monthsLate)
            {
                decimal baseFee = 0;

                if (student.StudentType == StudentType.Standard)
                {
                    baseFee = DefaultBaseFee;
                }
                else if (student.StudentType == StudentType.Management)
                {
                    baseFee = ManagementSeatBaseFee;
                }
                else if (student.StudentType == StudentType.Scholarship)
                {
                    baseFee = DefaultBaseFee;
                }
                decimal discount = 0;
                if (student.StudentType == StudentType.Scholarship)
                {
                    discount = baseFee / 2m; // 50% discount for scholarship students
                }
                decimal lateFee = monthsLate * LateFeePerMonth;
                decimal finalFee = baseFee - discount + lateFee;
                return new StudentFee
                {
                    StudentId = student.Id,
                    StudentType = student.StudentType,
                    CurrentTerm = term,
                    MonthsLate = monthsLate,
                    Discount = discount,
                    LateFee = lateFee,
                    FinalFee = finalFee
                };
            }

        }

        #endregion
    }
}