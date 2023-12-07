const Data = [
    {
        title:"Mean",
        code:`cat("Enter values in a vector: ")
        x<- scan()
        sum<-0
        for(i in 1:length(x))
        {
        sum=sum+x[i]
        }
        meanvalue<-sum/length(x)
        cat("Mean of given elements:",meanvalue)
        `
    },
    {
        title:"median",
        code:`cat("Enter values in a vector: ")
        x<-scan()
        n <- length(x)
        for(i in 1:(n-1))
        for(j in (i+1):n)
        if (x[i] > x[j])
        {
        temp <- x[i]
        x[i] <- x[j]
        x[j] <- temp
        }
        if(n%%2==0){
        med =(x[n%/%2]+x[(n%/%2)+1])/2.0
        } else
        med<-x[(n+1)%/%2]
        cat("median of given elements:", med)
        `
    },
    {
        title:"mode",
        code:`cat("Enter the vector: ")
        x = scan()
        max = 0
        count = 0
        element = 0
        k = 0
        l1=list()
        l2 = list()
        f=0
        for(i in 1:length(x)){
        k = x[i]
        count = 0
        for(j in 1:length(x))
        {
        if(x[j] == k)
        count = count+1
        }
        if(count > max)
        {
        f=0
        max = count
        element = k
        }else if(count==max){
        if(f==0){
        l2 = list()
        index = 1
        }
        f=1
        l2[index] = k
        index = index+1
        }
        }
        l2 = unique(l2)
        cat("Mode(s): \n")
        print(l2)
        `
    },
    {
        title:"Geometric Mean",
        code:`cat("Enter values in a vector: ")
        x<- scan()
        n<-length(x)
        prod<-1
        for(i in 1:n)
        prod<-prod*x[i]
        gm<-prod^(1/n)
        cat("Geometric Mean:",gm)
        `
    },
    {
        title:"Harmonic Mean",
        code:`cat("Enter values in a vector: ")
        x<- scan()
        n<-length(x)
        sum<-0
        for(i in 1:n)
        {
        sum=sum+(1/x[i])
        }
        hm<-n/sum
        cat("Harmonic mean of the given values:",hm)
        `
    },
    {
        title:"Bar plot",
        code:`H <- c(72,42,63,30,74)
        M <- c("Youtube","Twitter","Instagram","Snapchat","Facebook )
        barplot(H,xlab="MEDIUM",ylab="USERS PERCENTAGE",ylim=c(0,100),
        col='black',names.arg=M, main="2023 SOCIAL MEDIA USAGE STATS",
        border="black")
        `
    },
    {
        title:"Frequency polygon",
        code:`a <- c(5,6,7,8,9,10)
        b <- c(3,3,20,40,2,2)
        plot(a,b,type='o',col='black',ylim=c(0,70),xlab="EXAM GRADE",
        ylab="NO. OF STUDENTS SECURED",main="FREQUENCY OF EXAM GRADES 
        ,col.main='black )`
    },
    {
        title:"Histogram",
        code:`v<-c(5,6,19,9,18,23,67,11,10,44,45,54,37,26,8,5,32,23,19,2,45,1,45,66,7)
        hist(v,main="MARKS RANGE FREQUENCY OF 25 STUDENTS",
        xlab ="MARKS RANGE",xlim=c(0,70),
        ylab="NO. OF STUDENTS",ylim=c(0,10),col=rainbow(10))
        `
    },
    {
        title:"Pie chart",
        code:`x<-c(21500,5000,2000,1000,8000,10500,5000)
        lbls<-c("Home Loan", "Insurance","Electricity Bill","Water Bill",
        "Groceries", "Savings","Miscellanious")
        pie(x, labels = lbls,col=rainbow(10), main="SALARY EXPENSES PIE CHART")`
    },
    {
        title:"Scatter plot",
        code:`x <- c(5,7,8,7,2,2,9,4,11,12,9,6)
        y <- c(99,86,87,88,111,103,87,94,78,77,85,86)
        plot(x, y, main="CAR SPEED DETAILS SCATTER PLOT",col=rainbow(10),
        xlab="CAR AGE - IN YEARS", ylab="CAR MAX SPEED - KMPH")`
    },
    {
        title:"Range",
        code:`cat("Enter elements of the vector: ")
        a<-scan()
        x<-sort(a)
        r=x[length(x)]-x[1]
        cat("Range of Given elements is:",r)
        `
    },
    {
        title:"Quartile deviation",
        code:`cat("Enter elements of the vector: ")
        x<-scan()
        y<-sort(x)
        a1<-c()
        a2<-c()
        j=1
        m=median(y)
        for(i in y){
        if(i>=m)
        break
        OBSERVED OUTPUT
        else{
        a1[j]=i
        j=j+1
        }
        }
        j=1
        for(i in y){
        if(i<=m)
        next
        else{
        a2[j]=i
        j=j+1
        }
        }
        Q3=median(a2)
        Q1=median(a1)
        Q=(Q3-Q1)/2
        cat("Quatrile Deviation =",Q)
        `
    },
    {
        title:"Mean deviation",
        code:`cat("Enter elements of the vector: ")
        x<-scan()
        m=mean(x)
        print(m)
        a1=c()
        j=1
        for(i in x){
        if(m-i<0)
        a1[j]=-(m-i)
        else
        a1[j]=m-i
        j=j+1
        }
        cat("Mean Deviation of Given elements:",mean(a1))
        `
    },
    {
        title:"Standard deviation",
        code:`cat("Enter elements of the array: ")
        x<-scan()
        m=mean(x)
        a1=c()
        j=1
        for(i in x){
        a1[j]=(m-i)^2
        j=j+1
        }
        cat("Standard Deviation of Given
        elements:",(mean(a1)^0.5))
        `
    },
    {
        title:"Binomial",
        code:`cat("Input X values: ")
        x<-scan()
        cat("Input Frequencies: ")
        f<-scan()
        cat("Enter the level of significance: ")
        alpha<-scan()
        s<-length(x)-1
        fx=f*x
        p=sum(fx)/sum(f)/s
        P.M.F<-dbinom(x,size=s,prob=p)
        P.M.F<-round(P.M.F,digits=4)
        FP.M.F.<-(P.M.F*sum(f))
        X_Squared<-c()
        for(i in 1:length(f)){
         X_Squared[i]=((f[i]-FP.M.F.[i])^2)/FP.M.F.[i]
        }
        X_Squared=round(X_Squared,digits=4)
        mydata <- data.frame(x,f,fx,P.M.F,FP.M.F.,X_Squared)
        print(mydata,row.names=FALSE)
        t<-qchisq(1-alpha,df=s)
        cat("X squared value: ",sum(X_Squared),"Table Value: ",t)
        if(sum(X_Squared)<t){
         cat("\nSince,X squared<table value, We accept Null Hypothesis\n,i.e. Given Data
        follows Binomial Distribution.")
        }else{
         cat("\nSince,X squared>table value, We reject Null Hypothesis\n,i.e. Given Data
        doesn't follow Binomial Distribution.")
        }
        `
    },
    {
        title:"Poission",
        code:`cat("Input X values: ")
        x<-scan()
        cat("Input Frequencies: ")
        f<-scan()
        cat("Enter level of signifance: ")
        alpha<-scan()
        s<-length(x)-1
        fx=f*x
        p=sum(fx)/sum(f)
        P.M.F<-dpois(x,lambda=p)
        P.M.F<-round(P.M.F,digits=4)
        FP.M.F.<-(P.M.F*sum(f))
        X_Squared<-c()
        for(i in 1:length(f)){
         X_Squared[i]=((f[i]-FP.M.F.[i])^2)/FP.M.F.[i]
        }
        X_Squared=round(X_Squared,digits=4)
        mydata <- data.frame(x,f,fx,P.M.F,FP.M.F.,X_Squared)
        print(mydata,row.names=FALSE)
        t<-qchisq(1-alpha,df=s)
        cat("X squared value: ",sum(X_Squared),"Table Value: ",t)
        if(sum(X_Squared)<t){
         cat("\nSince,X squared<table value, We accept Null Hypothesis\n,i.e. Given Data
        follows Poisson Distribution.")
        }else{
         cat("\nSince,X squared>table value, We reject Null Hypothesis\n,i.e. Given Data
        doesn't follow Poisson Distribution.")
        }
        `
    },
    {
        title:"Normal",
        code:`cat("Input L.C.I's: ")
        l<-scan()
        cat("Input U.C.I's: ")
        u<-scan()
        cat("Input Frequencies: ")
        f<-scan()
        cat("Enter level of significance: ")
        alpha<-scan()
        xi<-(l+u)/2
        fixi=f*xi
        mean=sum(fixi)/sum(f)
        sd=0
        for(i in 1:length(xi)){
         sd=sd+f[i]*((xi[i]-mean)^2)
        }
        sd=sd/sum(f)
        sd=sd^0.5
        z<-c()
        for(i in 1:length(xi))
         z[i]=(xi[i]-mean)/sd
        z=round(z,digits=4)
        table_value=pnorm(xi, mean=mean, sd=sd,lower.tail = TRUE)
        table_value=round(table_value,digits=5)
        area<-c()
        for(i in 1:length(xi)-1){
         area[i]=table_value[i+1]-table_value[i]
        }
        area[length(f)]=0
        NPx=area*sum(f)
        X_Squared<-c()
        for(i in 1:length(f)-1){
         X_Squared[i]=((f[i]-NPx[i])^2)/NPx[i]
        }
        X_Squared[length(f)]=0
        X_Squared=round(X_Squared,digits=4)
        mydata <- data.frame(xi,f,fixi,z,table_value,area,NPx,X_Squared)
        print(mydata,row.names=FALSE)
        t<-qchisq(1-alpha,df=length(f)-1)
        cat("X squared value: ",sum(X_Squared),"Table Value: ",t)
        if(sum(X_Squared)<t){
         cat("\nSince,X squared<table value, We accept Null Hypothesis\n,i.e. Given Data
        follows Normal Distribution.")
        }else{
         cat("\nSince,X squared>table value, We reject Null Hypothesis\n,i.e. Given Data
        doesn't follow Normal Distribution.")
        }
        `
    },
    {
        title:"CONTINGENCY TABLE",
        code:`cat("\nEnter number of rows: ")
        r<-scan()
        cat("Enter number of columns: ")
        c<-scan()
        cat("Enter elements column-wise:")
        x<-scan()
        cat("Enter the level of significance: ")
        alpha<-scan()
        mat<-matrix(x,nrow=r,ncol=c)
        n1<-rowSums(mat)
        n2<-colSums(mat)
        l<-matrix(list(),nrow=r,ncol=c)
        for(i in 1:r){
        for(j in 1:c){
        l[[i,j]]=n1[i]*n2[j]/sum(x)
        }
        }
        X_Squared=0
        for(i in 1:r){
        for(j in 1:c){
        X_Squared=X_Squared+(mat[[i,j]]-l[[i,j]])^2/l[[i,j]]
        }
        }
        t<-qchisq(1-alpha,df=(r-1)*(c-1))
        cat("X_Squared value:",X_Squared,", table value:",t)
        if(X_Squared<t){
        cat("\nSince X_Squared < table value, we accept Null hypothesis \ni.e. The factors are
        independent in contingency table")
        }else{
        cat("\nSince X_Squared > table value, we reject Null hypothesis \ni.e. The factors are
        dependent in contingency table")
        }
        `
    },

]
