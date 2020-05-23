using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SilxoTest.Models;

    public class QuestionContext : DbContext
    {
        public QuestionContext (DbContextOptions<QuestionContext> options)
            : base(options)
        {
        }

        public DbSet<SilxoTest.Models.Question> Question { get; set; }
    }
