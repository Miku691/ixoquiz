app.controller("ixoquizController", ['$scope', '$rootScope', '$location', '$http', '$timeout',
    function ($scope, $rootScope, $location, $http, $timeout
    ) {
        const init = () => {
            // $scope.ixoRecentPosts = [{
            //     postImage: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080&amp;h=1080" sizes="(max-width: 1080px) 100vw, 1080px" srcset="https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1604909052743-94e838986d24??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1604909052743-94e838986d24??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1604909052743-94e838986d24??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1604909052743-94e838986d24??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1024 1024w',
            //     postCategory: 'Festivals',
            //     postDate: '04/01/25',
            //     postTitle: 'Top 10 Quiz question About Ramayan in Odia',
            //     postUrl: 'post1',
            //     categoryUrl: 'festivals',
            //     postImageAltTxt: 'This is alt text for this image'
            // },
            // {
            //     postImage: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080&amp;h=1080" sizes="(max-width: 1080px) 100vw, 1080px" srcset="https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1604909052743-94e838986d24??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1604909052743-94e838986d24??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1604909052743-94e838986d24??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1604909052743-94e838986d24??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2Flc2FyJTIwc2FsYWR8ZW58MHwyfHx8MTcwMDAwMDk4NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1024 1024w',
            //     postCategory: 'Festivals',
            //     postDate: '03/01/25',
            //     postTitle: 'Top 10 Fun Quiz question About Ramayan in Odia',
            //     postUrl: 'post2',
            //     categoryUrl: 'festivals',
            //     postImageAltTxt: 'This is alt text for this image'
            // }];

            //get quiz app path
            $rootScope.quizAppPath = $location.absUrl();
            //fetch recent posts.....
            $scope.endpoint = "customised/recent-post.json"
            $rootScope.customizeAndCallAPI($scope.endpoint, 'get', '', 'async')
            .then(function(response) {
                $scope.ixoRecentPosts = response;
            })
            .catch(function(error) {
                console.error("Error fetching quiz data:", error);
            });;

            // $scope.getHeadings();
        }

        $scope.ixoMsg = "This is ixoquiz";
        $scope.openScrollTitlePost = () => {
            alert('click working');
        }

        $scope.openPost = (quizIndex) => {
            $scope.endpoint = $scope.ixoRecentPosts[quizIndex].subCategoryUrl + '/' + $scope.ixoRecentPosts[quizIndex].postUrl + '.json';
            $rootScope.customizeAndCallAPI($scope.endpoint, 'get', '', 'async')
            .then(function(response) {
                //$rootScope.quizzes = response.data;
                $rootScope.postMetadata = $scope.ixoRecentPosts[quizIndex];
                localStorage.setItem('postMetadata', JSON.stringify($rootScope.postMetadata));
                
                $rootScope.quizes = response;
            })
            .catch(function(error) {
                console.error("Error fetching quiz data:", error);
            });;

            $location.path('/quiz/' + $scope.ixoRecentPosts[quizIndex].subCategoryUrl + '/' + $scope.ixoRecentPosts[quizIndex].postUrl);

            // $rootScope.getHeadings();
        }

        $scope.openCategory = (quizIndex) => {
            // window.open(url, '_blank');
            $location.path('/quiz/' + $scope.ixoRecentPosts[quizIndex].subCategoryUrl);
        }


        init();
    }
]);